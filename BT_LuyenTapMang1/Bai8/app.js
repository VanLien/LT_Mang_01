let arr=[];
let number;
for (let i=0;i<10;i++){
    number=Math.floor(Math.random()*100);
    arr.push(number);
    document.getElementById("integer").innerHTML=arr;
}
function result() {
    arr.sort(function (a, b) {
            return -a+b;
    });
    document.getElementById("order").innerHTML=arr;
}