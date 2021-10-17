import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

export default function FormatToday(date: Date | string) {
  const accurateDate = new Date(date);
  const formattedDate = format(accurateDate, 'dd LLLL', { locale: sv });
  return formattedDate;
}
