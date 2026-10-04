function comparison(data, userData) {
  let id = 1;
  let array = [];

  const tirOneWith = 1;
  const tirOneTo = 8;
  const tirTwoWith = 9;
  const tirTwoTo = 24;
  let count = 0;
  let total = 0;

  for (const user in userData) {
    let obj = {};
    obj.id = id;
    obj.user = user;

    for (const key in data) {
      for (const nameLeague in data[key]) {
        for (const keyUserLeague in userData[user]) {
          if (keyUserLeague === nameLeague) {
            let userArray = userData[user][keyUserLeague];
            let dataArray = data[key][nameLeague];
            for (let i = 0; i < dataArray.length; i++) {
              for (let k = 0; k < userArray.length; k++) {
                if (dataArray[i].id === userArray[k].id) {
                  //
                  if (dataArray[i].position === userArray[k].position) {
                    count = win(count);
                  } else if (
                    dataArray[i].position >= tirOneWith &&
                    dataArray[i].position <= tirOneTo &&
                    userArray[k].position >= tirOneWith &&
                    userArray[k].position <= tirOneTo
                  ) {
                    count = draw(count);
                  } else if (
                    dataArray[i].position >= tirTwoWith &&
                    dataArray[i].position <= tirTwoTo &&
                    userArray[k].position >= tirTwoWith &&
                    userArray[k].position <= tirTwoTo
                  ) {
                    count = draw(count);
                  } else {
                    count = lose(count);
                  }
                }
              }
            }
            total += count;
            obj[nameLeague] = count;
            obj.total = total;
            count = 0;
          }
        }
      }
      total = 0;
    }
    array.push(obj);
    id++;
  }
  // console.log(array);
  return array;
}
