export const formatDate = date => {
  const month = String(date.toLocaleString('en-us', { month: 'short' }));
  const day = String(date.getDate()).padStart(2, '0');

  return `${month}, ${day}`;
};
