function result() {
    let arr=[];
    let number;
    for (let i=0;i<10;i++){
        number=Math.floor(Math.random()*50);
        arr.push(number);
        document.getElementById("element").innerHTML=arr;
    }
      let first = 0;
      let last = arr.length-1;
      while (first < last) {
        let b = arr[first];
        arr[first] = arr[last];
        arr[last] = b;
        first++;
        last--;
      }
         document.getElementById("everse").innerText = arr;
}
