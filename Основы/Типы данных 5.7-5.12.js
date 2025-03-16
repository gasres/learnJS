///////////////////////Работа с Map//////////////////////////


//1. Подсчет количества элементов
//Дано: массив чисел [1, 2, 2, 3, 3, 3, 4].
//Задача: Используя Map, подсчитай количество вхождений каждого числа и верни объект Map.

//Ожидаемый результат: {1 => 1, 2 => 2, 3 => 3, 4 => 1}.

const countElements = (arr) => {
    const map = new Map
    for (let i of arr) {
        if (!map.has(i)) {
            map.set(i, 1)
        } else {
            map.set(i, map.get(i) + 1)
            }
    }
    return map
}
console.log(countElements([1, 2, 2, 3, 3, 3, 4]))



//2. Первый уникальный элемент
//Дано: массив чисел [4, 5, 1, 2, 0, 4, 1, 2].
//Задача: Найди первый уникальный элемент, используя Map.

const firstUnique = (arr) => {
    const map = new Map()
    for (let i of arr) {
        map.set(i, (map.get(i) || 0) + 1)
    }
    for( let i of arr) {
        if (map.get(i) === 1) {
            return i
        }
    }
    return null
}
console.log(firstUnique([4, 5, 1, 2, 0, 4, 1, 2]))



//3. Частота символов в строке
//Дано: строка "banana".
//Задача: Используя Map, подсчитай количество повторений каждого символа.
//Ожидаемый результат: {b => 1, a => 3, n => 2}.

const countLetter = (arr) => {
    const map = new Map()
    const array = arr.split('')
    for (let i of array) {
       map.set(i, (map.get(i) || 0) + 1)
    }
    return map
}
console.log(countLetter("banana"))



//4. Анаграммы
//Дано: два слова, например "listen" и "silent".
//Задача: Используя Map, определи, являются ли слова анаграммами (состоят из одинаковых букв в разном порядке).

const isAnagram = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false
    }
    
    const map = new Map()

    for (let i of str1) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    for (let i of str2) {
        if(!map.has(i)) {
            return false
        }
    }
    return true

}
console.log(isAnagram("listen", "silent"))




////////////////Работа с Set///////////////////////


//1.Удаление дубликатов
//Дано: массив [1, 2, 2, 3, 4, 4, 5].
//Задача: Используя Set, удали дубликаты и верни новый массив.

const removeDuplicates = (arr) => {
    const set = new Set(arr)
    return set
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))



//2. Общие элементы в двух массивах
//Дано: два массива [1, 2, 3, 4] и [3, 4, 5, 6].
//Задача: Найди общие элементы, используя Set.
//Ожидаемый результат: [3, 4].

const commonElements = (arr1, arr2) => {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const commonSet = new Set(arr1.concat(arr2))
    const commonElems = new Set
    for (let i of commonSet) {
        if(set1.has(i) && set2.has(i)) {
            commonElems.add(i)
        }
    }
    return commonElems
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); 



//3. Отсутствующие числа
//Дано: массив [1, 2, 4, 5] (числа от 1 до 5, но пропущено 3).
//Задача: Найди отсутствующее число, используя Set.

const missingNumber = (arr) => {
    const set = new Set(arr)
    const missingNum = []

    for( let i = 1; i <= arr.length + 1; i++)
        if(!set.has(i)) {
            missingNum.push(i)
        }
    return missingNum

}

console.log(missingNumber([1, 2, 4, 5, 7]))



//4.Есть ли дубликаты?
//Дано: массив [1, 2, 3, 4, 5, 2].
//Задача: Проверь, есть ли в массиве дубликаты, используя Set.
//Ожидаемый результат: true, так как 2 повторяется.

const hasDuplicates = (arr) => {
    const set = new Set()
    for (let i of arr) {
        if(!set.has(i)) {
            set.add(i)
        } else return true
    }
    return false

}

console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 5]));



//5. Первый повторяющийся элемент
//Дано: массив [2, 5, 1, 2, 3, 5, 1].
//Задача: Найди первый элемент, который повторяется (используй Set).
//Ожидаемый результат: 2.

const firstRepeating = (arr) => {
    const set = new Set
    for (let i of arr) {
        if(!set.has(i)) {
            set.add(i)
        } else return i
    }
    return null
}

console.log(firstRepeating([2, 5, 1, 2, 3, 5, 1])); 





//WeakMap, WeakSet
//1. Описание: Напиши функцию wasVisited(obj), которая проверяет, был ли переданный объект уже посещён.
//Вход: объект.
//Выход: true или false.

const weakMap = new WeakMap()
const wasVisited = (obj) => {
    
    if (!weakMap.has(obj)) {
        weakMap.set(obj, true)
        return false
    }
    return weakMap.get(obj)

}
const object = {}

console.log(wasVisited(object))
console.log(wasVisited(object))
console.log(wasVisited(object))

//2. Хранение ролей пользователей
// Описание: Напиши функцию setUserRole(user, role), которая устанавливает роль пользователя, 
// и getUserRole(user), которая возвращает его роль.
// Вход: объект пользователя и строка (роль).
// Выход: строка — роль пользователя.

const weakMap1 = new WeakMap()
const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

const setUserRole = (user, role) => {
    weakMap1.set(user, role)
}

const getUserRole = (user) => {
   return weakMap1.get(user)
}

setUserRole(user1, "Admin");
setUserRole(user2, "User")

console.log(getUserRole(user1)); // "Admin"
console.log(getUserRole(user2)); // "User"
console.log(getUserRole({ name: "Charlie" })) //undefined

//3. Подсчет количества посещений объекта
//Описание: Напиши функцию visit(obj), которая увеличивает счетчик посещений объекта, 
//и getVisitCount(obj), которая возвращает количество посещений.
//Вход: объект.
//Выход: число — количество посещений.

const weakMap2 = new WeakMap()

const visit = (obj) => {

    if(!weakMap2.has(obj)) {
        weakMap2.set(obj, 1)
    } else {
        weakMap2.set(obj, weakMap2.get(obj) + 1)
    }
}

const getVisitCount = (obj) => {
    if (weakMap2.has(obj)) {
        return weakMap2.get(obj)
    }
    return null
}

let object2 = {}
visit(object2)
visit(object2)
visit(object2)
visit(object2)
console.log(getVisitCount(object2))
object2 = null
console.log(getVisitCount(object2))


//4. Очистка кеша для удаленных объектов
//Используй WeakMap для кэширования результатов вычислений.
//Когда объект удаляется, кэш должен пропадать автоматически.

const cache = new WeakMap()

const calculate = (obj) => {
    if(!cache.has(obj)) {
        console.log('первое вычисление')
        cache.set(obj, 'вычисление из кэша')
    }
    return cache.get(obj)
}
let object3 = {}
console.log(calculate(object3))

//5. Логирование активных объектов
//Создай WeakSet для отслеживания активных объектов и Map для хранения времени их последнего использования.

const objects = new WeakSet()
const dateOfUse = new Map()

const activator = (obj) => {
    objects.add(obj)
    dateOfUse.set(obj, new Date())
}

const isActive = (obj) => {
    return objects.has(obj)
}
let obj = {}
activator(obj)
console.log(isActive(obj))





//////////////////////Object.keys, values, entries///////////////////////


//1. Описание: Напиши функцию countProperties(obj), которая принимает объект и возвращает количество его свойств.
//Вход: { a: 1, b: 2, c: 3 }
//Выход: 3

const countProperties = (obj) => {
    return Object.values(obj).length
}
const objj = {a: 1, b: 2, c: 3}
console.log(countProperties(objj))

//2. Проверка наличия пустых значений
//Напиши функцию hasEmptyValues(obj), которая проверяет, есть ли в объекте null, undefined или "" (пустая строка).
//Вход: { name: "Alice", age: null, city: "New York" }

const hasEmptyValues = (obj) => {
    const arr = Object.values(obj)
    return arr.includes(null) || arr.includes(undefined) || arr.includes('') 
}
console.log(hasEmptyValues({ name: "Alice", age: null, city: "New York" }))

//3. Напиши функцию getAllValues(obj), которая принимает объект и возвращает массив всех его значений.
//Вход: { a: 10, b: 20, c: 30 }
//Выход: [10, 20, 30]

const getAllValues = (obj) => {
    return Object.values(obj)
}
console.log(getAllValues({ a: 10, b: 20, c: 30 }))

//4. Создание объекта из массива пар
//Напиши функцию pairsToObject(pairs), которая превращает массив пар [ключ, значение] обратно в объект.
//Вход: [["name", "Alice"], ["age", 25]]
//Выход: { name: "Alice", age: 25 }

const pairsToObject = (pairs) => {
   return Object.fromEntries(pairs)
}
console.log(pairsToObject([["name", "Alice"], ["age", 25]]))







////////////////////Date///////////////////////


//1.Описание: Напиши функцию daysBetween(date1, date2), которая принимает две даты и возвращает количество дней между ними.
// Вход: new Date("2024-03-01"), new Date("2024-03-10")
// Выход: 9

const daysBetween = (date1, date2) => {
    return date1.getDate() - date2.getDate()
}
console.log(Math.abs(daysBetween(new Date("2024-03-01"), new Date("2024-03-10"))))


//2. Описание: Напиши функцию isLeapYear(year), которая принимает год и возвращает true, если он високосный, иначе false.
//Вход: 2024
//Выход: true
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}
console.log(isLeapYear(2024))


//3. Описание: Напиши функцию addDays(date, days), которая принимает дату и число, добавляет это количество дней и возвращает новую дату.
//"2024-03-01", 10
//"2024-03-11"

const addDays = (date, days) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)

    const year = newDate.getFullYear()
    const month = newDate.getMonth() + 1
    const day = newDate.getDate()

    return `${year}-${month}-${day}`
}
console.log(addDays("2024-03-01", 10))


//4. Напиши функцию getWeekday(date), которая принимает дату и возвращает название дня недели ("Понедельник", "Вторник", и т. д.).
//Вход: new Date("2024-03-11")
//Выход: "Понедельник"

const getWeekday = (date) => {
    const week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    return week[date.getDay()]
}

console.log(getWeekday(new Date("2024-03-11")))

