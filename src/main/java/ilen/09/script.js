//Math - не объект, имеет свойства ссылающиеся на определенные функции

Math.abs(10); //абсолютное значение

Math.acos(-1); //арккосинус/синус

Math.atan(45); //арктангенс

Math.ceil(45); //округлет до ближайшего верхнего

Math.E; //экспонента ~2,72

Math.exp(2); //экспонента в степени 2

Math.floor(2.2); //округляет до ближайшего меньшего

Math.LN10; //логарифм 10 по основании экспоненты

Math.log(10); // логарифм от 10

Math.LOG10E; //логарифм по основании 10 от экспоненты

Math.max(10, 34, 55, 60); //наибольший аргумент среди списка

Math.min(11,25,34); //наименьшее значение среди переданных

Math.PI; //значение числа PI

Math.pow(2,3); // два в степени 3

Math.random(); //возвращает псевдослучайное число от 0,0 - 1,0 floor((random * 100 (0 - 100)))

Math.sin(30); //получение синуса (30 * (2 * PI) /360) радианы
Math.tan(30); //тангенс

Math.sqrt(81); //вычисляет квадратный корень

Math.SQRT1_2; // 1/ sqrt(2)

Math.SQRT1_2; // sqrt(2)

//NaN - Ннеопределенный результат, свойство принадлежит объекту Number
// result = Nan == Nan   - всегда false
// result = Nan  
// result = result != result; true
//isNan()

//new Number(10) - обжект
//Number(10) - преобразование в number
Number.MAX_VALUE; // Максимально значение
Number.MIN_VALUE; // Минимальное значение

//+- бесконечность
Number.NEGATIVE_INFINITY; 
Number.POSITIVE_INFINITY;

//методы
Number.toString(); // преобразует к строке
Number.toLovaleString(); // преобразует к строке c учетом локали

let namb = 10.5;
namb.toFixed(10);// стрококвое представление числа без экпоненциальной натации 10,5000000000

namb.toPrecision(2); //форматирует значащие цифры числа = 11

parseFloat('10.23 hello world'); //выполняет синт разбор переданной строки и возвращает первое число

parseInt('10.23 hello world'); //разбор с возвратом яцелочисленного числа



 




