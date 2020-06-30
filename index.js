// п.1-5, 10

let findButton = document.getElementById('find');
let inputText = document.querySelector('input');
let objArr = [
    {name: "Alex",
    age: 29},
    {name: "Igor",
    age: 32},
    {name: "Lena",
     age: 35},
    {name: "Andrey",
    age: 22}    
]

let btn = () => {
return (
findButton.addEventListener('click', () => {
    if (inputText.value=="google") {
        setTimeout('alert("Yandex круче. Но это не точно!")', 3000);
    } else {
    alert(objArr[0].name + " " + inputText.value)
    }
}))
} 

btn();

// п.6 - сумма двух чисел, передаваемых через параметр.
let superSum = (a, b) => {
    return (
        alert (a+b)
    );
};

superSum(5, 2); // в параметры функции нужно ввести произвольные два числа.

// п. 7 - вычисление максимального и минимального элемента массива.
const arr = [8, 10, 22, 3, 18];

let getMax= () => {
    let max = arr[0];
    for (let i=0; i<arr.length; i++) {
        if (max<arr[i]) max=arr[i];
    } return max;
   
};

let getMin = () => {
    let min = arr[0];
    for (let i=0; i<arr.length; i++) {
        if (min>arr[i]) min=arr[i];
    } return min;
};

console.log(getMax());
console.log(getMin());

// п.8 - поменять местами значения двух переменных.

let a = "Первое значение";
let b = "Второе значение";

let c = a;
a=b;
b=c;

console.log(a);
console.log(b);

// п.9 - функция findMax для любого массива чисел.

function findMax(numArray) {
    return Math.max.apply(null, numArray);
  }
  console.log(findMax([33, 2, 87, 16, 4])); //в массив нужно ввести числа.

