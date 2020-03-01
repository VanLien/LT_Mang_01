function Begin() {
    let random=[];
    let number;
    let result=0;
    for (let i=0;i<10;i++) {
        number = Math.floor(Math.random() * 10);
        random.push(number);
        document.getElementById("arrRandom").innerHTML = random;
        let max = random[0];
        let index = 0;
        for (let i = 0; i < random.length; i++) {
            if (max < random[i]) {
                max = random[i];
                index = i;
                result=result+random[i]/random.length;
                document.getElementById("result").innerHTML=result;
                document.getElementById("maxValue").innerHTML=max;
                document.getElementById("lenght").innerHTML=index;
            }
        }
    }
}
