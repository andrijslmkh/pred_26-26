function objSortPosition(obj) {
  for (const key in obj) {
    obj[key].sort((a, b) => {
      return a.position - b.position;
    });
  }
  return obj;
}

function arrSortTotal(arr) {
  let result = [...arr];
  result.sort((a, b) => b.total - a.total);
  return result;
}
