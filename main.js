const multiplicationTable = size => {
    let arr = []
    let boxArr = []
    let num = 0
    for (let i = 0 ; i < size ; i++){
      arr.push(i+1)
    }
    while (num < size){
      num++
      let boxRow = []
      for (let j = 0 ; j < arr.length ; j++){
        boxRow[j] = arr[j] * num
      }
      boxArr.push(boxRow)
    }
    return boxArr
  }