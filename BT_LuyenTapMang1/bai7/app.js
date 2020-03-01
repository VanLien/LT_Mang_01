    let arr=[];
    let number;
    for (let i=0;i<10;i++){
        number=Math.floor(Math.random()*20);
        arr.push(number);
    } document.getElementById("elementRandom").innerHTML=arr;
function check(){
    let input=parseInt(document.getElementById("number").value);
    let element;
    for (let i=0;i<arr.length;i++){
        if (input===arr[i]){
            element=1;
            for (let j=i;j<arr.length;j++){
                arr[j]=arr[j+1];
            }
            arr.pop();
            arr.push(0);
        }
    }
    if (element===1){
        document.getElementById("Result").innerHTML=input+" is in arry :"+arr;
    }else{
        document.getElementById("Result").innerHTML=input+" is Not in arry :"+arr;
    }
    }

