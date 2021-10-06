export default function getForecastDate(index: number) {
  const today = new Date();
  const date = today.getDate() + index;
  return date;
}
