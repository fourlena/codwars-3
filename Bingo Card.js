function getCard() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      let r = `B${getRandomIntInclusive(1, 15)}`;
      if (!arr.includes(r)) {
        arr.push(r);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 5; i++) {
      let r = `I${getRandomIntInclusive(16, 30)}`;
      if (!arr.includes(r)) {
        arr.push(r);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 5; i++) {
      let r = `N${getRandomIntInclusive(31, 45)}`;
      if (i === 2) {
      } else if (!arr.includes(r)) {
        arr.push(r);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 5; i++) {
      let r = `G${getRandomIntInclusive(46, 60)}`;
      if (!arr.includes(r)) {
        arr.push(r);
      } else {
        i--;
      }
    }
    for (let i = 0; i < 5; i++) {
      let r = `O${getRandomIntInclusive(61, 75)}`;
      if (!arr.includes(r)) {
        arr.push(r);
      } else {
        i--;
      }
    }
    return arr;
  }
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }