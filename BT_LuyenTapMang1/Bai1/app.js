function Begin() {
    let arr = [];
    let result = [];
    let number = [];
    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 20);
        arr.push(number);
        document.getElementById("random").innerHTML = arr;
    }
    for (let i = 0; i < 10; i++) {
        if (arr[i] > 10) {
            result.push(arr[i]);
            document.getElementById("Result").innerHTML = result;
        }
    }
}