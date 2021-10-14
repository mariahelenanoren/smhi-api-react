export default function convertUTCTime(UTCTime: string | undefined) {
  if (UTCTime) {
    const localTime = new Date(UTCTime);
    let hour = localTime.getHours().toString();
    let minutes = localTime.getMinutes().toString();

    if (hour.length < 2) {
      hour = '0' + hour;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    const time = hour + ':' + minutes;
    return time;
  }
}
