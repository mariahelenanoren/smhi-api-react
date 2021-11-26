import { ICity } from '../contexts/cityContext';

export default function organizeCityData(csv: string) {
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
  /* Sorts list alphabetically */
  const sortedCityList = cityList.sort((a, b) =>
    a.locality > b.locality ? -1 : 1
  );
  return sortedCityList;
}
