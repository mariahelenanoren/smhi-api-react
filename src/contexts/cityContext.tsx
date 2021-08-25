import { createContext, useEffect, useState } from 'react';

interface City {
    locality: string;
    municipality: string;
    county: string;
    latitude: string;
    longitude: string;
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
                    setCities((prevState) => [...prevState, cityObject]);
                }
            });
        }
        fetchCities();
    }, []);

    const addNewCity = (city: City) => {
        setCities((prevState) => [...prevState, city]);
    };

    const removeCity = (city: City) => {
        setCities(cities.filter((c) => c !== city));
    };

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
