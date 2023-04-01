export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  const pagesArray = [];
  for (let index = 0; index < totalPages; index++) {
    pagesArray.push(index + 1);
  }
  return pagesArray;
};
