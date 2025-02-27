//1. Напиши функцию, которая удаляет повторяющиеся элементы из массива и возвращает новый массив.


const removeDuplicates = (arr) => {
    let array = []
    for(let i of arr) {
        if (!array.includes(i)) { 
            array.push(i)
            } 
    }
    return array
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // [1, 2, 3, 4]

//2. Оставить только первое вхождение строк, начинающихся с одинаковой буквы.

const filterUniqueFirstLetter = (arr) => {
    let array = []
    for (let item of arr) {
        let unique = true
        for (let  i of array) {
            if  (i[0] === item[0]) {
                unique = false;
                break
            }
        }
        if (unique) {
            array.push(item)
            }
    }
    return  array
}




console.log(filterUniqueFirstLetter(["apple", "banana", "apricot", "blueberry", "avocado"])); 
// ["apple", "banana"]

//3.  Напиши функцию, которая группирует массив по длине элементов.


const groupByLength = (arr)=> {
    let obj = {}
    for (let i of arr) {
        const length = i.length
        if(!obj[length]) {
            obj[length] = []
            }
        obj[length].push(i)
        }
    return obj
    }


console.log(groupByLength(["one", "two", "three", "four", "five", "six"])); 
// { 3: ["one", "two", "six"], 4: ["four", "five"], 5: ["three"] }

//4.  Напиши функцию, которая возвращает самый частый символ в массиве строк.

const mostFrequentLetter = (arr) => {
    let array = arr.join(',').split('')
    let obj= {}
    for (let i of array) {
        if (!obj[i]) {
            obj[i] = 1
        } else {obj[i]++}
    }

    const innerArray = Object.values(obj)
    const maxCount = Math.max(...innerArray)

    for (let item in obj) {
    if(obj[item] === maxCount) {
        return item
        }
    }

}


console.log(mostFrequentLetter(["hello", "world", "javascript"]));
// "o" (встречается чаще всего)



//5. Функция должна возвращать true, если массив читается одинаково слева направо и справа налево.


const isPalindrome = (arr) => {
   return  arr.join(',') === arr.reverse().join(',') ? true : false
}

console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome(["a", "b", "c", "b", "a"])); // true
console.log(isPalindrome([1, 2, 3])); // false



//6. YНапеиши функцию, которая, пропускает первые два четных числа и считает сумму оставшихся.

const sumSkippedEvens = (arr) => {
    let array = arr.slice(2)
    return array.reduce((acc, item) => acc + item)
}

console.log(sumSkippedEvens([2, 4, 6, 8, 10])); // 6 + 8 + 10 = 24



//7. Разбей массив на подмассивы указанного размера.

const chunkArray = (arr, n) => {
    let array = []
    while (arr.length > n) {
       let part = arr.splice(0, n)
       array.push(part)
    }
    array.push(arr)
    return array
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// [[1, 2, 3], [4, 5, 6], [7]]


//8. Найти сумму чисел, которые встречаются более одного раза.

const sumOfDuplicates = (arr) => {
    let array = []
    let sum = 0
    for (let i of arr) {
        if (!array.includes(i)) {
            array.push(i)
        } else {
            sum = sum + i
        }
    }
    return sum
}

console.log(sumOfDuplicates([1, 2, 3, 2, 4, 5, 4, 3, 3, 3, 3])); // 18


//9. Вернуть объект, в котором ключи — длины слов, а значения — количество слов этой длины.

const countWordLengths = (arr) => {
    let obj = {}

    for (let i of arr) {
        let item = i.length
        if(!obj[item]) {
            obj[item] = 1
        } else {
            obj[item]++
        }
    }
    return obj
}
console.log(countWordLengths(["a", "bb", "ccc", "bb", "a", "dddd"])); 
// {1: 2, 2: 2, 3: 1, 4: 1}