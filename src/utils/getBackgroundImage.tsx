export default function getBackgroundImage(value: number) {
  switch (value) {
    case 1:
    case 2:
      return 'sun.jpg';
    case 3:
    case 4:
    case 5:
    case 6:
      return 'clouds.jpg';
    case 7:
      return 'fog.jpg';
    case 8:
    case 9:
    case 10:
      return 'rain.jpg';
    case 11:
      return 'thunder.jpg';
    case 12:
    case 13:
    case 14:
      return 'rain.jpg';
    case 15:
    case 16:
    case 17:
      return 'snow.jpg';
    case 18:
    case 19:
    case 20:
      return 'rain.jpg';
    case 21:
      return 'thunder.jpg';
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
      return 'snow.jpg';
    default:
      return 'clouds.jpg';
  }
}
