import React, { useCallback } from 'react';
import { createContext, useEffect, useState } from 'react';

export interface ICity {
  locality: string;
  municipality: string;
  county: string;
  latitude: string;
  longitude: string;
}

interface IState {
  allCities: ICity[];
  savedCities: ICity[] | undefined;
}

interface IProps {
  children: Object;
}

interface IContext extends IState {
  addNewCity: (city: ICity) => void;
  removeCity: (city: ICity) => void;
}

export const CityContext = createContext<IContext>({
  allCities: [],
  savedCities: [] || undefined,
  addNewCity: () => {},
  removeCity: () => {},
});

function CityProvider(props: IProps) {
  const [savedCities, setSavedCities] = useState<ICity[]>();
  const [allCities, setAllCities] = useState<ICity[]>([]);

  useEffect(() => {
    const defaultCityNames = ['Stockholm', 'Göteborg', 'Malmö'];
    const defaultCities = allCities
      .filter((city) => defaultCityNames.includes(city.locality))
      .sort()
      .reverse();
    if (savedCities && !savedCities.length && defaultCities) {
      setSavedCities(defaultCities);
    }
  }, [allCities, savedCities]);

  useEffect(() => {
    const prevSavedCities = JSON.parse(
      window.localStorage.getItem('savedCities') || '[]'
    );
    setSavedCities(prevSavedCities);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('savedCities', JSON.stringify(savedCities));
  }, [savedCities]);

  const addNewCity = (city: ICity) => {
    if (savedCities) {
      setSavedCities([...savedCities, city]);
    } else {
      setSavedCities([city]);
    }
  };

  const removeCity = (city: ICity) => {
    setSavedCities(
      savedCities?.filter(
        (c) => c.longitude !== city.longitude && c.latitude !== city.latitude
      )
    );
  };

  const fetchCities = useCallback(async () => {
    /* Fetches and reads CSV file */
    const response = await fetch(
      '/svenska-stader-master/src/svenska-stader.csv'
    );
    const reader = response.body?.getReader();
    const result = await reader?.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result?.value);
    organizeData(csv);
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const organizeData = (csv: string) => {
    /* Organizes information */
    const cityList: ICity[] = [];
    const list = csv.split('\n');
    list.forEach((item, index) => {
      const i = item.split(',');
      const cityObject = {
        locality: i[0],
        municipality: i[1],
        county: i[2],
        latitude: i[3],
        longitude: i[4],
      };
      /* First item of list consist of headings */
      if (index !== 0) {
        cityList.push(cityObject);
      }
    });
    setAllCities(cityList);
  };

  return (
    <CityContext.Provider
      value={{
        allCities,
        savedCities,
        addNewCity,
        removeCity,
      }}
    >
      {props.children}
    </CityContext.Provider>
  );
}

export default CityProvider;
