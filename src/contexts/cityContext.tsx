import React, { useCallback } from 'react';
import { createContext, useEffect, useState } from 'react';
import { getAllCities } from '../utils';

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
  savedCities: [],
  addNewCity: () => {},
  removeCity: () => {},
  setDefaultCities: () => {},
});

function CityProvider(props: IProps) {
  const [savedCities, setSavedCities] = useState<ICity[]>([]);

  const setDefaultCities = useCallback(async () => {
    const allCities = await getAllCities();
    const defaultCityNames = ['Stockholm', 'Göteborg', 'Malmö'];

    const defaultCities = allCities.filter((city) =>
      defaultCityNames.includes(city.locality)
    );

    if (!savedCities.length && defaultCities) {
      setSavedCities(defaultCities);
    }
  }, [savedCities.length]);

  useEffect(() => {
    const prevSavedCities = JSON.parse(
      window.localStorage.getItem('savedCities') || '[]'
    );
    setSavedCities(prevSavedCities);
  }, []);

  useEffect(() => {
    if (savedCities.length) {
      window.localStorage.setItem('savedCities', JSON.stringify(savedCities));
    } else {
      setDefaultCities();
    }
  }, [savedCities, setDefaultCities]);

  const addNewCity = (city: ICity) => {
    setSavedCities([...savedCities, city]);
  };

  const removeCity = (city: ICity) => {
    setSavedCities(
      savedCities.filter(
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
