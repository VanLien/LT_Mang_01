function Begin() {
    let arrA=[];
    let arrB=[];
    let numberA;
    let numberB;
    for (let i=0;i<10;i++){
        numberA=Math.floor(Math.random()*50);
        numberB=Math.floor(Math.random()*100);
        arrA.push(numberA);
        arrB.push(numberB);
    }    document.getElementById("elementA").innerHTML=arrA;
         document.getElementById("elementB").innerHTML=arrB;
    let arrC =arrA.concat(arrB);
        arrC.sort(function (a, b) {
            return a-b;
        });
    document.getElementById("elementC").innerHTML=arrC;

}
