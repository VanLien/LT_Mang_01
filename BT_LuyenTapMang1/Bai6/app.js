    let arr = [];
    let number;
    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 20);
        arr.push(number);
    }
    document.getElementById("element").innerHTML = arr;
function checkArr() {
    let input = parseInt(document.getElementById("number").value);
    let check;
    for (let i = 0; i < 10; i++) {
        if (input === arr[i]) {
            check = 1;
        }
        if (check === 1) {
            document.getElementById("result").innerHTML = input + " is in arry :" + arr;
        } else {
            document.getElementById("result").innerHTML = input + " is not in arry :" + arr;
        }
    }
}