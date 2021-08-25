import { createContext, useState } from 'react';

interface City {
    locality: string;
    municipality: string;
    county: string;
    latitude: number;
    longitude: number;
}

interface State {
    cities: City[];
}

interface Props {
    children: Object;
}

interface Context extends State {
    addNewCity: (city: City) => void;
    removeCity: (city: City) => void;
}

const CityContext = createContext<Context>({
    cities: [],
    addNewCity: () => {},
    removeCity: () => {},
});

function CityProvider(props: Props) {
    const [cities, setCities] = useState<City[]>([]);

    const addNewCity = (city: City) => {};

    const removeCity = (city: City) => {};

    return (
        <CityContext.Provider
            value={{
                cities,
                addNewCity,
                removeCity,
            }}
        >
            {props.children}
        </CityContext.Provider>
    );
}

export default CityProvider;
