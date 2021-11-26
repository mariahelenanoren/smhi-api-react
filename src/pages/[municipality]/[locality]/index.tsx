import { ICity } from '../../../contexts/cityContext';
import Forecast from '../../../layout/forecast/forecast';
import Page from '../../../layout/page/page';

export default function ForecastPage({ allCities }: { allCities: ICity[] }) {
  return (
    <Page>
      <Forecast allCities={allCities} />
    </Page>
  );
}
