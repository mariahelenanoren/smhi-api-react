import React from 'react';
import { createContext, useEffect, useState } from 'react';

export interface ICity {
  locality: string;
  municipality: string;
  county: string;
  latitude: string;
  longitude: string;
}

interface IState {
  savedCities: ICity[] | undefined;
}

interface IProps {
  children: Object;
}

interface IContext extends IState {
  addNewCity: (city: ICity) => void;
  removeCity: (city: ICity) => void;
  setDefaultCities: (allCities: ICity[]) => void;
}

export const CityContext = createContext<IContext>({
  savedCities: [] || undefined,
  addNewCity: () => {},
  removeCity: () => {},
  setDefaultCities: () => {},
});

function CityProvider(props: IProps) {
  const [savedCities, setSavedCities] = useState<ICity[]>();
  // const [allCities, setAllCities] = useState<ICity[]>([]);

  const setDefaultCities = (allCities: ICity[]) => {
    const defaultCityNames = ['Stockholm', 'Göteborg', 'Malmö'];
    /* Filters out default cities and sorts them in reverse alphabetically order */
    const defaultCities = allCities
      .filter((city) => defaultCityNames.includes(city.locality))
      .sort()
      .reverse();
    if (savedCities && !savedCities.length && defaultCities) {
      setSavedCities(defaultCities);
    }
  };

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

  return (
    <CityContext.Provider
      value={{
        savedCities,
        addNewCity,
        removeCity,
        setDefaultCities,
      }}
    >
      {props.children}
    </CityContext.Provider>
  );
}

export default CityProvider;
