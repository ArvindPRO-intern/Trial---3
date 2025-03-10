import { format, isValid, parse } from 'date-fns';
import * as moment from 'moment';

export const formatYearRange = (yearRange: string): string => {
  const [start, end] = yearRange.split(' - ');
  return parseInt(end) - parseInt(start) < 100 && end.slice(0, 2) === start.slice(0, 2)
    ? `${start} - ${end.slice(-2)}`
    : yearRange;
};

export const parseAndFormatDate = (dateInput: string | Date): string | null => {
  if (dateInput instanceof Date) return format(dateInput, 'yyyy-MM-dd');

  const formatMap = { '-': 'dd-MM-yyyy', '/': 'dd/MM/yy' };
  const delimiter = dateInput.includes('-') ? '-' : '/';
  const parsedDate = parse(dateInput, formatMap[delimiter], new Date());

  return isValid(parsedDate) ? format(parsedDate, 'yyyy-MM-dd') : null;
};

export const getFinancialDate = (year: string) => moment(`03-31-${year}`).toDate();
