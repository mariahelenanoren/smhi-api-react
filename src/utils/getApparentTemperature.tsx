import { IParameter } from '../contexts/weatherContext';
import getParameterValue from './getParameterValue';

export default function getApparentTemperature(parameters: IParameter[]) {
  const t = getParameterValue('t', parameters);
  const w = getParameterValue('ws', parameters);
  if (t && w) {
    const calculation =
      13.12 +
      0.6215 * t -
      13.956 * Math.pow(w, 0.16) +
      0.48669 * t * Math.pow(w, 0.16);
    if ((w < 2 || w > 35) && (t > 10 || t < -40)) {
      return t;
    } else {
      return calculation.toFixed(1);
    }
  } else {
    return undefined;
  }
}
