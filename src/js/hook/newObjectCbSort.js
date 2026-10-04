function newObjectCbSort(obj, cb) {
  let newObj = {};
  for (const firstKey in obj) {
    newObj[firstKey] = {};
    for (const name in obj[firstKey]) {
      let arr = [];
      obj[firstKey][name].forEach((el) => {
        arr.push(el);
      });
      newObj[firstKey][name] = [...arr];
    }
    cb !== undefined
      ? (newObj[firstKey] = cb(newObj[firstKey]))
      : newObj[firstKey];
  }

  return newObj;
}
