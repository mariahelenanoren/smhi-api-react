import { useRouter } from 'next/router';

import { ICity } from '../../../contexts/cityContext';
import Forecast from '../../../layout/forecast/forecast';
import Page from '../../../layout/page/page';

export default function ForecastPage({ allCities }: { allCities: ICity[] }) {
  const router = useRouter();
  const { locality } = router.query;

  return (
    <Page title={`Väder för ${locality}`}>
      <Forecast allCities={allCities} />
    </Page>
  );
}
