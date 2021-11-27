import organizeCityData from './organizeCityData';

export default async function getAllCities() {
  const response = await fetch(
    'https://raw.githubusercontent.com/sphrak/svenska-stader/master/src/svenska-stader.csv'
  );
  const data = await response.text();
  const allCities = organizeCityData(data);
  return allCities;
}
