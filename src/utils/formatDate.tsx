import { format } from 'date-fns';
import { sv } from 'date-fns/locale';

export default function FormatDate(date: Date) {
  const formattedDate = format(date, 'dd LLLL', { locale: sv });
  return formattedDate;
}
