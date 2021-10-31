export default function getWeatherCondition(value: number) {
  switch (value) {
    case 1:
      return 'klar himmel';
    case 2:
      return 'nästan klar himmel';
    case 3:
      return 'varierande molnighet';
    case 4:
      return 'halvklar himmel';
    case 5:
      return 'monligt';
    case 6:
      return 'mulet';
    case 7:
      return 'dimma';
    case 8:
      return 'lätt regnskur';
    case 9:
      return 'måttlig regnskur';
    case 10:
      return 'kraftig regnskur';
    case 11:
      return 'åskväder';
    case 12:
      return 'lätt skur av snörblandat regn';
    case 13:
      return 'måttlig skur av snörblandat regn';
    case 14:
      return 'kraftig skur av snörblandat regn';
    case 15:
      return 'lätt snöby';
    case 16:
      return 'måttlig snöby';
    case 17:
      return 'kraftig snöby';
    case 18:
      return 'lätt regn';
    case 19:
      return 'måttligt regn';
    case 20:
      return 'kraftigt regn';
    case 21:
      return 'åska';
    case 22:
      return 'lätt snöblandat regn';
    case 23:
      return 'måttligt snöblandat regn';
    case 24:
      return 'kraftigt snöblandat regn';
    case 25:
      return 'lätt snöfall';
    case 26:
      return 'måttligt snöfall';
    case 27:
      return 'kraftigt snöfall';
  }
}
