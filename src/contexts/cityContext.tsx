import { createContext, useEffect, useState } from 'react';

interface City {
    locality: string;
    municipality: string;
    county: string;
    latitude: string;
    longitude: string;
}

interface State {
    allCities: City[];
    savedCities: City[];
}

interface Props {
    children: Object;
}

interface Context extends State {
    addNewCity: (city: City) => void;
    removeCity: (city: City) => void;
}

const CityContext = createContext<Context>({
    allCities: [],
    savedCities: [],
    addNewCity: () => {},
    removeCity: () => {},
});

function CityProvider(props: Props) {
    const [savedCities, setSavedCities] = useState<City[]>([]);
    const [allCities, setAllCities] = useState<City[]>([]);

    useEffect(() => {
        async function fetchCities() {
            /* Fetches and reads CSV file */
            const response = await fetch(
                '/svenska-stader-master/src/svenska-stader.csv'
            );
            const reader = response.body?.getReader();
            const result = await reader?.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result?.value);

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
                if (item !== list[0]) {
                    setAllCities((prevState) => [...prevState, cityObject]);
                }
            });
        }
        fetchCities();
    }, []);

    const addNewCity = (city: City) => {
        setSavedCities((prevState) => [...prevState, city]);
    };

    const removeCity = (city: City) => {
        setSavedCities(savedCities.filter((c) => c !== city));
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
