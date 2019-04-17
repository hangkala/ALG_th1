function findMin(arr) {
    for (i = 0; i < arr.length; i++) {
        min = arr[0];
        if (arr[i] < min) {
            min = arr[i];
        }
    } return min;
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

let num = [];
for (i = 0; i < 100; i++){
    num.push(Math.floor(Math.random()*100)+0);
}
let minNum = findMin(num);
document.write(displayArr(num));
"<br/>"
document.write('Min ='+minNum);