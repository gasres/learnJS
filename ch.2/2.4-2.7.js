// 2.4 Переменные//////////////////////////////////////////////////////////////

//let    блочная область видимости, не виден снаружи, можно переопределять, не всплывает(ошибка)
//const  блочная область видимости, не виден снаружи, нельзя переопределять, не всплывает(ошибка)
//var    игнорирует область видимости, виден везде в функции или глобально, можно переопределять, всплывает-можно обратиться до объявления(undefined)

let admin, name
name ="john"
admin = name
console.log(admin)

// 2.5, 2.7 Типы данных, преобразование типов////////////////////////////////////////

//string
//number
//boolean
//bigInt
//null
//undefined
//symbol
//object

//1. Преобразование в число

// Явное - метод Number(value)
// Неявное - математические операторы(кроме бинарного плюса), напр. унарный плюс: +value 

Number("123");  // 123
Number(true);   // 1
Number(false);  // 0
Number(null);   // 0
Number(undefined); // NaN
Number("abc");  // NaN
Number("");     // 0
Number([]);     // 0
Number([1,2]);  // NaN
Number({});     // NaN

+true;          // 1
+false;         // 0
+"123";         // 123

//2. Преобразование в строку

// Явное - метод String(value)
// Неявное - Конкатенация со строкой: value + ""

String(123);      // "123"
String(true);     // "true"
String(false);    // "false"
String(null);     // "null"
String(undefined);// "undefined"
String([]);       // ""
String([1, 2]);   // "1,2"
String({});       // "[object Object]"

123 + "";         // "123"
true + "";        // "true"

//3. Преобразование в логический тип

//Явное - метод Boolean(value)
//Неявное - с условными, логическими, тернарным операторами,  циклами - 
// условия в них преобразуются к логическому типу по принципу "falsy"\"truthy":

//     "Falsy" значения (преобразуются в false):

//false
//0
//-0
//"" (пустая строка)
//null
//undefined
//NaN

//      Все остальные значения считаются истинными (truthy), включая:

//Непустые строки: "abc", " "
//Числа, кроме 0 и NaN: 42, -42
//Пустые массивы: []
//Пустые объекты: {}
//Функции: function() {}

Boolean(123);     // true
Boolean(0);       // false
Boolean("");      // false
Boolean("abc");   // true
Boolean(null);    // false
Boolean(undefined);// false
Boolean([]);      // true
Boolean({});      // true
Boolean(NaN);     // false

if ("hello") {
    console.log("Это истинное значение"); // Выполнится
}
if (0) {
    console.log("Это ложное значение"); // Не выполнится
}

console.log(!!"abc");  // true
console.log(!!0);      // false

let value = 5;
while (value) {
    console.log(value); // Выполняется, пока `value` не станет falsy, т.е. 0
    value--;
}

let message = 0 ? "Истина" : "Ложь";
console.log(message); // "Ложь"

