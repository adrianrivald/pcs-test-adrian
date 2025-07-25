import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export function formatTimeDescription(timestamp : string) {
  const date = dayjs(timestamp);
  const now = dayjs();

  if (date.isToday()) {
    return 'Today';
  } else if (date.isYesterday()) {
    return 'Yesterday';
  }

  const diffDays = now.diff(date, 'day');

  if (diffDays >= 2 && diffDays <= 6) {
    return `${diffDays} days ago`;
  } else if (diffDays >= 7 && diffDays <= 13) {
    return '1 week ago';
  } else {
    return date.format('YYYY-MM-DD');
  }
}