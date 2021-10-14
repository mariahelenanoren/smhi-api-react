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
  savedCities: ICity[];
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
  savedCities: [],
  addNewCity: () => {},
  removeCity: () => {},
});

function CityProvider(props: IProps) {
  const [savedCities, setSavedCities] = useState<ICity[]>([]);
  const [allCities, setAllCities] = useState<ICity[]>([]);

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
    setSavedCities((prevState) => [...prevState, city]);
  };

  const removeCity = (city: ICity) => {
    setSavedCities(savedCities.filter((c) => c !== city));
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
    const list = csv.split('\n');
    list.forEach((item) => {
      const i = item.split(',');
      const cityObject = {
        locality: i[0],
        municipality: i[1],
        county: i[2],
        latitude: i[3],
        longitude: i[4],
      };
      /* First item of list consist of headings */
      if (item !== list[0]) {
        setAllCities((prevState) => [...prevState, cityObject]);
      }
    });
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
