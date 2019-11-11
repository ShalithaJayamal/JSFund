function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
  }
  
  let arr = ["Pink Panther", "Chhota Bheem", "Ben 10", "Tom and Jerry", "Doraemon"]
  let op = reverseArr(arr);
  console.log(op);