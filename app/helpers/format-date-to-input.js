import { helper } from '@ember/component/helper';
import { format } from 'date-fns';

export default helper(function formatDate(
  [date],
  { formatString = 'yyyy-MM-dd' }
) {
  if (!date) return '';
  return format(date, formatString);
});
