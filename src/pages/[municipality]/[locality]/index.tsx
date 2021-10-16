import { Box } from '@material-ui/core';
import Forecast from '../../../layout/forecast/forecast';
import Page from '../../../layout/page/page';

export default function ForecastPage() {
  return (
    <Box>
      <Page>
        <Forecast />
      </Page>
    </Box>
  );
}
