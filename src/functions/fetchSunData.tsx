export default async function fetchSunData(
  latitude: string,
  longitude: string
) {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`
  );
  const data = await response.json();
  return data;
}
