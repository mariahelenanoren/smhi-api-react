import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

export default function FormatDate(date: Date | string) {
  const accurateDate = new Date(date);
  const formattedDate = format(accurateDate, 'EEEE dd LLLL', { locale: sv });
  return formattedDate;
}
