function strCount(obj){
    var count = 0;
    let arr = Object.values(obj);
    for(let i of arr){
      if(typeof(i) == 'string'){
      count++
    } else if(typeof(i) === 'object' && i != null){
      count += strCount(i)
    }
    }
    return count;
  }