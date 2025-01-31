//1/ Напиши функцию sumAll, которая принимает любое количество чисел и возвращает их сумму. 
// Используй rest-оператор для сбора аргументов.

function sumAll (...args) {
    let x = 0
    for( let arg of args) {
        x += arg
    }
    return x
 }
 console.log(sumAll(4, 5, 20, 100, 3, 6))
 console.log(sumAll(5, 11, 333, -333, -11, 1, 10, -10))



 //2. Напиши функцию multiply, которая использует каррирование. Функция должна принимать первый аргумент и 
 // возвращать новую функцию, которая принимает второй аргумент и возвращает произведение двух чисел.

 function multiply (a) {
    return function multiply2 (b) {
        return a * b
    }
 }
 console.log(multiply(10)(3))


 //3. Напиши функцию memoize, которая принимает другую функцию и возвращает её мемоизированную версию. 
 // Мемоизация позволяет кэшировать результаты выполнения функции для одинаковых аргументов.

 function memoize (fun) {
    let memCache = new Map()
    return function(x) {
        if (memCache.has(x)) {
            return (`Аргумент из кэша ${memCache.get(x)}`)
        }
        let result = fun(x)
        
        memCache.set(x, result)
        return result
    } 

 }

function original (x) {
    console.log(`Аргумент из исходника + первое вычисление для него ${x}`)
    return x
}
const memedOriginal = memoize(original)

console.log(memedOriginal(5))
console.log(memedOriginal(5))
console.log(memedOriginal(5))
console.log(memedOriginal(5))

//4. Напиши функцию createCounter, которая возвращает объект 
// с методами increment, decrement и getValue. Используй замыкание для хранения текущего значения счётчика.

function createCounter (x) {
    let current = x
    return {
        
        increment() {
            current++},
        decrement() {
            current--},
        getValue() {
            return current
        }
    }
}
const counter = createCounter(10)
console.log(Object.getOwnPropertyNames(counter))
counter.increment()
console.log(counter.getValue()) //11
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()
console.log(counter.getValue()) //7


//5. Напиши функцию delay, которая принимает 
// функцию и задержку в миллисекундах, а затем вызывает эту функцию через указанное время.

function delay (x, y) {
    return setTimeout(x, y)
}

delay(() => console.log('Hello!'), 2000)

//6/ Напиши функцию unique, которая принимает массив и 
// возвращает новый массив, содержащий только уникальные элементы исходного массива.

 function unique (arr) {
    let arrUnique = []
    for (let key of arr) {
        if (!arrUnique.includes(key)) {
            arrUnique.push(key)
        }
        return arrUnique
    }
 }

 //7. Напиши функцию createMultiplier(multiplier), которая возвращает функцию умножения числа на заданный коэффициент.

 function createMultiplier(coef) {
    let x = coef
    return  function multiplier (multy) {
        
        let result = multy * x
        return result

    }
 }
 const double = createMultiplier(2);
 const triple = createMultiplier(3);

 console.log(double(5))
 console.log(triple(5))

 //8. Напиши функцию maxNumber, которая принимает 
 // любое количество чисел и возвращает наибольшее из них. 

 function maxNumber (...args) {
    return Math.max(...args)
 }

 console.log(maxNumber(10, 5, 20, 15))

 //9. Напиши функцию generateSequence, которая принимает два числа: start и end. Функция должна возвращать 
 // массив чисел от start до end (включительно). Если start > end, возвращай числа в обратном порядке.

 function generateSequence(start, end) {
    let arr = []
    if (start < end) {
        for (let i = start; i <= end; i++){
            arr.push(i)
            }
        } else if (start > end) {
        for (let i = start; i >= end; i--){
            arr.push(i)
            }
    }
    return arr
 }

 console.log(generateSequence(5, 1))
 console.log(generateSequence(1, 10))

 