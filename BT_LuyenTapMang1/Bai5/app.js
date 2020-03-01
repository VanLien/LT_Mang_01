let arr=[];
function displayArr() {
    let input=document.getElementById("element").value;
    if (input<=0){
        alert("Số Phần Tử Trong Hàm Không Đúng -Mời Nhập Lại");
    }else {
        for (let i=0;i<input;i++){
            let number=Math.floor(Math.random()*50)-25;
            arr.push(number);
        }
        document.getElementById("display").innerHTML=input+" Phần Tử Ngẫu Nhiên Từ 25 Đến(-25) Là: "+arr;
    }
}
function result() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] < 0) {
            count++;
        }
        document.getElementById("Result").innerHTML ="Tổng Số Nguyên Âm Có Trong Chuỗi Là: "+count;
    }
}