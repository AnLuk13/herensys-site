export const formatDate = (date: Date | string): string => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (typeof date === 'string') {
    // Check if it's in yyyy-mm-dd or yyyy/mm/dd format
    const datePattern = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/;
    const match = date.match(datePattern);
    if (match) {
      const [, year, month, day] = match;
      const monthIndex = parseInt(month, 10) - 1;
      const monthName = months[monthIndex];
      return `${parseInt(day, 10)} ${monthName} ${year}`;
    }
    return date;
  }

  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${monthName} ${year}`;
};
