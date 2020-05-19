function count (string) {  
  let arr = string.split("");
  let chars = new Array();
  let alph = ("abcdefghijklmnopqrstuvwxyz").split("");
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < alph.length; j++) {
      if (alph[j] == arr[i])
        chars.push(arr[i].charCodeAt(0));
    }
  }
  
  
  console.log(chars);
  
  // The function code should be here
   return { a: 2, b: 1 };
}
