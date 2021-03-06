import { ICity } from '../contexts/cityContext';
import Home from '../layout/home/home';
import Page from '../layout/page/page';

export default function HomePage({ allCities }: { allCities: ICity[] }) {
  return (
    <Page title="Väder">
      <Home allCities={allCities} />
    </Page>
  );
}
