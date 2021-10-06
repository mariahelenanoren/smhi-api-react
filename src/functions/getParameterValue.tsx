import { IParameter } from '../contexts/weatherContext';

export default function getParameterValue(
  name: string,
  parameters: IParameter[]
) {
  return parameters.find((p) => p.name === name)?.values[0];
}
