let num = [];
for (i = 0; i < 100; i++){
    num.push(Math.floor(Math.random()*100)+0);
}
let minNum = findMin(num);
let countTime = countTimeAppear(num,10);
let indexAppearance = indexAppear(num,10);
document.getElementById("line1").innerHTML = displayArr(num);
"<br/>";
document.getElementById("line2").innerHTML = 'Min = ' + minNum;
document.getElementById("line3").innerHTML = 'So lan xuat hien = ' + countTime;
document.getElementById("line4").innerHTML = 'Những vị trí xuất hiện = ' + indexAppearance;

function countTimeAppear(arr,findNum) {
    dem = 0;
    for (i = 0; i < arr.length;i++){
        if (findNum === arr[i]){
            dem = dem + 1;
        }
    }
    return dem;
}

function indexAppear(arr,findNum) {
    let index = [];
    for (i = 0; i < arr.length;i++){
        if (findNum === arr[i]){
            index.push(i);
        }
    } return index;
}

function findMin(arr) {
    min = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function displayArr(arr) {
    str = "";
    for (i = 0; i < arr.length; ++i) {
        str += arr[i].toString() + " ";
        if(i % 10 === 9){
            str += ("<br/>");
        }
    }
    if(i % 10 !== 0){
        str += ("<br/>");
    }
    return str;
}
