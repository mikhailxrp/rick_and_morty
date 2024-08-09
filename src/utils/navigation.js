export const getTotalPages = (pages) => {
  const result = [];

  for (let i = 0; i < pages; i++) {
    result.push(i);
  }

  return result;
};
