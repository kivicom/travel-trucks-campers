export const handleValue = value => {
  if (!value) return '';
  const match = value.match(/([\d.]+)([a-zA-Z]+)/);
  const matchValue = match ? match[1] : '';
  const matchUnit = match ? match[2] : '';
  return `${matchValue} ${matchUnit}`.trim();
};

export const formatCamelCase = value => {
  if (!value) return '';
  return value.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
};
