// 2.13-.2.14 Циклы while, for, for...in, for...of, конструкция switch
//Задачи из learn JS

//1. Последнее значение цикла
let i = 3;

while (i) {
  alert( i-- );
}
//1 последнее, т.к. сначала выведет потом применит декремент


//2. Какие значения выведет цикл while?
//Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert( i ); //1, 2, 3, 4 - сначала инкремент, потом сравнение

//Постфиксный вариант i++

let i = 0;
while (i++ < 5) alert( i ); //1, 2, 3, 4, 5 - сначала сравнение, потом инкремент


//3.Какие значения выведет цикл for?

//Префиксная форма:

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4,

//Постфиксная форма:

for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

//4. При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i++ ) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
//5. Замените for на while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let i = 0
  while (i < 3) {
    alert( `number ${i++}!` )
  }




//6. Напишите цикл, который предлагает prompt ввести число, большее 100. 
//Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).


for (let i = prompt('Введите число больше 100'); i <= 100 && i; i = prompt('Введите число больше 100') ) {} 
или 
let i
do {
    i = prompt('Введите число больше 100')

} while (i <= 100 && i)







//7. Напишите код, который выводит все простые числа из интервала от 2 до n.
let n = 20
jump: for (let i = 2; i <= n; i++) {       // берем все числители от 2 до n
    for (let y = 2; y < i; y++) {          // берем все знаменатели от 2 до n-1
        if (i % y === 0) {                 // если в данной итерации числителей хотя бы 1 знаменатель разделит числитель без остатка, 
            continue jump                  // то эта итерация-не простое число-выходим наружу и берем следующий числитель
        } 
    }
    console.log(i)                         //если же условие 77 ни разу не сошлось, то continue не будет, число-искомое, и оно выведется
}








//8. Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}



if (browser === 'Edge') {
  alert( "You've got the Edge!" )
} else (browser === 'Chrome' || 
  browser === 'Firefox' || 
  browser === 'Safari' || 
  browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }







//9.Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}



switch (number) {
  case '0' :
    alert('Вы ввели число 0');
    break

  case '1' :
    alert('Вы ввели число 1');
    break

  case '2' :
  case '3' : 
    alert('Вы ввели число 2, а может и 3');
    break
}



////Задачи из нейронки


//1. Напишите код, который запрашивает у пользователя число и вычисляет сумму его цифр. 
// Используйте цикл for.

const numberSum = prompt("Введите число")
let sum = 0

for (let i = 0; i < numberSum.length; i++ ) { //перебираемс полученную строку как массив
  
    sum += +numberSum[i]
}
console.log(sum)







//2. Напишите код, который переворачивает число (123 → 321). Используйте цикл for.

function reverser (arg) {
  arg = String(arg)
  let reversedArr = []
  for (let i of arg) {
  reversedArr.unshift(i)
  }
  reversedArr = Number(reversedArr.join(''))

  return reversedArr
}

reverser(553377543)








//3. Напишите код, который выводит таблицу умножения для чисел от 1 до 10.

let multiplyIterations  = []

  for(let i = 1; i <= 10; i++) {

    for(let y = 1; y <= 10; y++) {
      let result = i * y
      multiplyIterations.push(`${i} * ${y} = ${result}`)

    }

  }

multiplyIterations.join('\n')







//4. Напишите код, который выводит все числа от 1 до 100, которые делятся на 3, используя while.

let x = 1
 while (x >= 1 && x <= 100) {
    
    if (x % 3 === 0) {
      console.log(x)
    }
    x++
 }

 //5. Напишите код, который запрашивает у пользователя числа и останавливается, 
 // когда сумма введённых чисел превышает 100. Используйте while.


 let x = 0

 while (x <= 100) {
    let num = +prompt('type a number')
    x += num
    console.log(`current sum is ${x}`)
 }



 // Компьютер загадывает число от 1 до 50, а пользователь пытается угадать его.
 // Если введённое число меньше загаданного, выводится "Загаданное больше". Если больше, то 
 // "Загаданное меньше". 
 // Программа заканчивается, когда пользователь угадывает. Используйте while.


 let numberToGuess =  Math.floor(Math.random() * 50) + 1
 let userGuess = 0

 while (userGuess !== numberToGuess) {
  userGuess = +prompt('Угадайте число от 1 до 50')

  if (userGuess > numberToGuess) {
    alert("Загаданное больше")
  } else if (userGuess > numberToGuess) {
    alert("Загаданное меньше")
  } else (userGuess === numberToGuess) {
  alert("Угадал")
  }
}


// 6. Напишите программу, которая запрашивает у пользователя числа через prompt до тех пор, пока он не введёт 0. 
// После этого программа должна вывести сумму всех введённых чисел. Используйте do while

let numberForSum 
let totalNumber = 0
do {
  numberForSum = +prompt("Type a number")
  if (isNaN(numberForSum)) {
    continue
  }
  totalNumber += numberForSum;
} while (numberForSum !== 0)

  alert(totalNumber)


