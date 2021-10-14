export default function getForecastDate(index: number) {
  const today = new Date();
  const day = new Date();
  day.setDate(today.getDate() + index + 1);
  const weekday = getWeekday(day);
  const date = day.getDate();
  const month = getMonth(day);
  return `${weekday} ${date} ${month}`;
}

function getWeekday(date: Date) {
  switch (date.getDay()) {
    case 0:
      return 'Söndag';
    case 1:
      return 'Måndag';
    case 2:
      return 'Tisdag';
    case 3:
      return 'Onsdag';
    case 4:
      return 'Torsdag';
    case 5:
      return 'Fredag';
    case 6:
      return 'Lördag';
    default:
      return 'Undefined';
  }
}

function getMonth(date: Date) {
  switch (date.getMonth()) {
    case 0:
      return 'Januari';
    case 1:
      return 'Februari';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'Maj';
    case 5:
      return 'Juni';
    case 6:
      return 'Juli';
    case 7:
      return 'Augusti';
    case 8:
      return 'September';
    case 9:
      return 'Oktober';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return 'Undefined';
  }
}
