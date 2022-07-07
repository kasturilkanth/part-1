function getNoofPage(items, itemPerPage) {
  let page = items / itemPerPage;
  page = Math.floor(page);
  if (items % itemPerPage !== 0) {
    page++;
  }
  return page;
}
function getPagesFromPage(data, currentPage, noOfElementsPerPage) {
  return data.slice(
    (currentPage - 1) * noOfElementsPerPage,
    currentPage * noOfElementsPerPage
  );
}
// const utils = Object.freeze({ getNoofPage });
export { getNoofPage, getPagesFromPage };
