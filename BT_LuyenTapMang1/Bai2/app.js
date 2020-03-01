let random=[];
let arr=[];
for (let i=0;i<10;i++) {
    random = Math.floor(Math.random() * 100);
        arr.push(random);
        document.getElementById("random").innerHTML=arr;
        let max=arr[0];
        let index=0;
        for (let i=0;i<=arr.length;i++){
            if (max<arr[i]){
                max=arr[i];
                index=i;
            }
        }
        document.getElementById("result").innerHTML=max;
        document.getElementById("location").innerHTML=index;
}
