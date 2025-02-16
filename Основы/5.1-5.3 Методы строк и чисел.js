//Методы примитивов
//Числа

//1 Напиши функцию, которая принимает число и возвращает его строковое представление с пробелами между тысячами.



function formatNumber(num) {
    const str = num.toString()
    const [int, frag] = str.split(".")
    let formInt = '';
    let count = 0;
  
    for (let i = int.length - 1; i >= 0; i--) {
        formInt = int[i] + formInt;
        count++;
        if (count % 3 === 0 && i != 0) {
          formInt = " " + formInt;
        }
    } 
    if (frag) {
      return `${formInt}.${frag}`
    } else {
      return formInt
    }
  }
  
  console.log(formatNumber(1234567.89)); // "1 234 567.89"
  console.log(formatNumber(3457347347346.23426)); // 3 457 347 347 346.2344
  
  
  
  //2. Получи целую и дробную части числа без Math.floor(), Math.trunc(), parseInt(), split().
  
  
  
  function splitNumber(num) {
    const str = num.toString()
    const[integer, fragment] = str.split('.')
    const arr = []
    arr.push(+integer, +fragment)
    return arr
  }
  
  console.log(splitNumber(123.456)); // [123, 0.456]
  console.log(splitNumber(-987.654)); // [-987, -0.654]
  
  
  
  
  //3. Отсортируй массив чисел по количеству символов в строковом представлении.
  console.log(sortByDigitLength([1, 99, 1000, 23, 45678])); // [1, 99, 23, 1000, 45678]
  
  function sortByDigitLength(...arr) {
    arr.sort()
    return arr
  }
  
  
  

  //4. Напиши функцию isAlmostEqual(a, b), которая считает два числа равными, если их разница меньше Number.EPSILON
  
  console.log(isAlmostEqual(0.1 + 0.2, 0.3)); // true
  console.log(isAlmostEqual(0.0000001, 0.0000002)); // false
  
  function isAlmostEqual(a, b) {
  return  Math.abs(a - b) < Number.EPSILON ? true : false
  }
  
  


  //5. Напиши функцию, которая автоматически определяет систему счисления числа (2, 8, 10, 16) 
  // и парсит его в десятичное число.
  
  console.log(parseSmart("0b1010")); // 10 (из двоичной)
  console.log(parseSmart("0o77")); // 63 (из восьмеричной)
  console.log(parseSmart("0xFF")); // 255 (из шестнадцатеричной)
  console.log(parseSmart("42")); // 42 (десятичная)
  
  function parseSmart(num) {
    if (num.startsWith("0b") || num.startsWith("0B")) {
      num = num.slice(2);
    }
    return parseInt(num, 2) ? 
    parseInt(num, 2) : 
    parseInt(num, 16) ? 
    parseInt(num, 16) : 
    parseInt(num, 8) ?
    parseInt(num, 8) :
    parseInt(num)
  }
  



  //6. Напиши функцию roundToNearest(n, step), которая округляет число n до ближайшего step.
  
  console.log(roundToNearest(47, 5)); // 45
  console.log(roundToNearest(82, 10)); // 80
  console.log(roundToNearest(267, 50)); // 250
  console.log(roundToNearest(250, 66)); // 264
  
  function roundToNearest (n, step) {
    const stepsToN = Math.round(n / step)
  
    return stepsToN * step
  }
  
  
  
  //7 . Напиши функцию randomFixed(min, max, decimals), 
  // которая возвращает случайное число между min и max с decimals знаками после запятой.
  
  console.log(randomFixed(1, 5, 2)); 
  console.log(randomFixed(10, 20, 3)); 
  
  
  function randomFixed(min, max, decimals) {
    const randomNum = Math.random() * (max - min) + min
    return randomNum.toFixed(decimals)
  }
  
  
  
  
  //8. Напиши функцию, которая принимает строку с числами, разделёнными пробелами, и возвращает [минимум, максимум].
  
  console.log(findMinMax("5 1 9 10 3 100")); // [1, 100]
  console.log(findMinMax("-5 0.3 2.4 -10 50")); // [-10, 50]
  
  function findMinMax(arg) {
    const arr = arg.split(' ').sort((a,b) => a - b)
    return [arr[0], arr.at(-1)]
  }
  
  
  
  //9. Оставь в массиве только числа, у которых ровно N знаков после запятой.
  
  console.log(filterByDecimals([1.23, 3.456, 78.9, 4.00, 5.6789, 3.1, 4.0], 2)); // [1.23, 78.9, 4.00]
  console.log(filterByDecimals([1.2335, 3.456000, 3.4560001, 78.90, 4.0000000, 5.6789, 3.1345247, 4.0], 4)); // [1.23, 78.9, 4.00]
  
  function filterByDecimals (arr, signs) {
    let filteredArr = []
  
    for (let i of arr) {
      const strI = i.toString();
      const dotPose = strI.indexOf('.');
      const lengthAfterDot = strI.substring(dotPose).length
  
      if (dotPose !== -1) {
      
        if (lengthAfterDot === signs || lengthAfterDot === signs + 1 ) {
          filteredArr.push(+i);
        }
      } else if (lengthAfterDot < signs || lengthAfterDot === 0) {
  
          filteredArr.push(+i.toFixed(2));
        }
    }
  
      return filteredArr
  }
  
  







  // Строки /////////////////////////////////////////////

  //Методы примитивов


//1. Напиши функцию removeDuplicates(str), которая удаляет все повторяющиеся символы, оставляя только первое вхождение каждого.

console.log(removeDuplicates("hello world")); // "helo wrd"
console.log(removeDuplicates("aabbccddeeff")); // "abcdef"

function removeDuplicates(str) {
    let arr = []

    for(let i of str) {
        if (!arr.includes(i)) {
        arr.push(i)
        }
        continue
    }
    return arr.join('')
}



//2. Напиши функцию charCount(str), которая возвращает объект с количеством вхождений каждого символа.

console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }

function charCount(str) {
  let obj = {}
  
  for (let i of str) {
    if (obj[i]) {
        obj[i]++
    } else {
        obj[i] = 1
    }
  }
  return obj
}



//3. Напиши функцию reverseWords(str), которая разворачивает буквы в каждом слове, но сохраняет порядок слов.

console.log(reverseWords("hello world")); // "olleh dlrow"
console.log(reverseWords("JavaScript is fun")); // "tpircSavaJ si nuf"


function reverseWords(str) {
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }
  return arr.join(' ')
}



//4. Напиши функцию removeVowels(str), которая удаляет все гласные (a, e, i, o, u).

console.log(removeVowels("hello world")); // "hll wrld"
console.log(removeVowels("javascript")); // "jvscrpt"

function removeVowels(str) {
    let arr = str.split('')
    let results = arr.filter(item => item !== "a" 
      && item !== "e" 
      && item !== "i" 
      && item !== "o" 
      && item !== "a"
     )
     return results.join('')
}



//5. Напиши функцию isAnagram(str1, str2), которая проверяет, 
// можно ли из одной строки составить другую, переставляя буквы.

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false


function isAnagram(str1, str2) {
  let standartizedStr1 = str1.split('').sort().join('')
  let standartizedStr2 = str2.split('').sort().join('')
  if (standartizedStr1 === standartizedStr2 ) {
    return true
  } 
  return false
}

console.log('listen'.split('').sort().join(''))




//6. Напиши функцию wordCount(str), которая считает количество слов в строке (разделитель — пробел).

console.log(wordCount("hello world! This is JavaScript.")); // 5
console.log(wordCount("One, two, three.")); // 3
console.log(wordCount("One, two, three. dfgdh 23425 sdfgsdhd 23452 dfgdh")); // 8


function wordCount(str) {
    const arr = str.split('')
    let count = 1
    for (let i of arr) {
      if (i === " ") {
        count++
      }
    }
    return count
}




//7. Напиши функцию doubleChars(str), которая дублирует каждый символ в строке.


console.log(doubleChars("hello")); // "hheelllloo"
console.log(doubleChars("123")); // "112233"


function doubleChars(str) {
  let arr = str.split('')
  let arrDouble = []
  for (let i of arr) {
    arrDouble.push(i + i)
  }
  return arrDouble.join('')
}
