export default function getForecastDate(index: number) {
  console.log(index);
  const today = new Date();
  const day = new Date();
  day.setDate(today.getDate() + index);
  const weekday = getWeekday(day);
  const date = day.getDate();
  const month = getMonth(day);
  return `${weekday} ${date} ${month}`;
}

function getWeekday(date: Date) {
  switch (date.getDay()) {
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
    case 7:
      return 'Söndag';
    default:
      return 'Undefined';
  }
}

function getMonth(date: Date) {
  switch (date.getMonth()) {
    case 1:
      return 'Januari';
    case 2:
      return 'Februari';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'Maj';
    case 6:
      return 'Juni';
    case 7:
      return 'Juli';
    case 8:
      return 'Augusti';
    case 9:
      return 'September';
    case 10:
      return 'Oktober';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return 'Undefined';
  }
}
