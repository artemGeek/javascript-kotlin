//Создание ммассива
let array = [1, 5, 6, 7, 2];

//удаление элемента массива с конца (одного)
array.pop();

//Добавление элемента в конец массива - запушить элемент , также можно добавить текстовый
array.push(32);

// удаление элемента сначала
array.shift();

// добавление элемента в начало
array.unshift("1");
// array[99] = 99; // присваение 99 элемету массивы значение - все ост underfined

console.log(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//foreach перебор массива
array.forEach(function(item, i , mass) {
    console.log(i + ': ' + item + " (массив: " + mass  + ")");
}); //первым всегда идет перебираемй элемент, индекс, массив
// вывод0: 1 (массив: 1,5,6,7,32)
// 1: 5 (массив: 1,5,6,7,32)
// 2: 6 (массив: 1,5,6,7,32)
// 3: 7 (массив: 1,5,6,7,32)
// 4: 32 (массив: 1,5,6,7,32)

let mass = [1,3,6,9];
for(let key in mass) {  //будет выводиться пара ключ 0,1,2,3 
    console.log(key);
}

//если нужны значения то мы in заменяем на of
for(let key of mass) {  
    console.log(key);
}

let answer = prompt("Введите элементы через запятую","");
let array2 = [];

//split разделение в массив из окна
 array2 = answer.split(',');
 console.log(array2); 

 //соединение данных в массиве и в переменную
let array3 = ["qqq","www","eee"];
let i = array3.join(" - "); // в скобках разделитель для ячеек массива
console.log(i); 

//сортировка массива по алфовиту
let array4 = ["qqq","www","eee"]; //если будут цифры,Ю сравниваются как строки
let y = array4.sort(); 
console.log(y); 

function compareNum(a,b) { //можно передать в sort, основывается на разности между элементами
    return a-b;
}
//сортировка правильная с помозщью цифр
let array5 = [1,15,6]; //если будут цифры,Ю сравниваются как строки
let e = array5.sort(compareNum); 
console.log(e); 

//псевдо массивы не обладают основыными признаками основного массива