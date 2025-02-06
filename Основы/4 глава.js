//1. Что выведет этот код? Как исправить?
const person = {
    name: "Анна",
    sayHi() {
      console.log(`Привет, меня зовут ${this.name}`);
    }
  };
  
  setTimeout(person.sayHi, 1000); // this = undefined\window
  setTimeout((() => person.sayHi()), 1000) // передать колбеком стрелку, тогда метод можно вызвать с правильным this





//2. Используя стрелочную функцию или bind, исправьте код так, чтобы он корректно работал.


const user = {
  name: "Иван",
  greet() {
    setTimeout(function () {
      console.log(`Привет, ${this.name}`);
    }, 500);
  }
};

user.greet();

const user2 = {
    name: "Иван",
    greet() {
      setTimeout(() => {
        console.log(`Привет, ${this.name}`);
      }, 500);
    }
  };
  
  user2.greet();

//или

const user3 = {
    name: "Иван",

    greet() {
      setTimeout(funcBind
      , 500);
    }
}

const func = function () {
    console.log(`Привет, ${this.name}`)
  }
const funcBind = func.bind(user3)
user3.greet()




//3.Создайте конструктор Car, который принимает brand и year и создает объект с методом getAge, возвращающим возраст машины.

function Car (brand, year) {

    this.getAge = function() {
        let now = new Date
        return `This ${brand} is ${now.getFullYear() - year} years old`
    }
    
}
const myCar = new Car("Toyota", 2015)
const mySecondCar = new Car("Volkswagen", 2021)

console.log(myCar.getAge())
console.log(mySecondCar.getAge())




//4. Добавьте геттер и сеттер fullName в объект userObj, чтобы можно было устанавливать и получать полное имя.


const userObj = {
  firstName: "Иван",
  lastName: "Петров",
  //
  get fullName() {
    const _fullName = this.firstName + ' ' + this.lastName
    return _fullName
  },

  set fullName(value) {
    const arr = value.split(' ')
    this.firstName = arr[0]
    this.lastName = arr[1]
  }
};

console.log(userObj.fullName); // Иван Петров
userObj.fullName = "Сергей Сидоров";
console.log(userObj.firstName); // Сергей
console.log(userObj.lastName); // Сидоров



//5. Реализуйте метод Symbol.toPrimitive, чтобы объект money корректно преобразовывался к числу и строке.
const money = {
    amount: 1000,
    
    [Symbol.toPrimitive] (hint) {
        return hint === "string" ? `${this.amount} руб.` : this.amount 
    }
  };

console.log(+money); // 1000 (число)
console.log(`${money}`); // "1000 руб."


//6. Создайте объект user, в котором хранится скрытое свойство _id, доступное только через Symbol, и напишите метод для его получения.

const _id = Symbol()
const userA = {
    name: "Анна",
    [_id]: "Уникальный ID",
    getId() {
        return userA[_id]
    }
  };
  
  console.log(userA._id); // undefined
  console.log(userA.getId()); // Уникальный ID




//7. Добавьте в объект counter методы increase(), decrease() и showValue(), чтобы работало так:

const counter = {
    value: 0,
    increase() {
        this.value++
        return this
    },

    decrease() {
        this.value--
        return this
    },

    showValue() {
       console.log(this.value)
    },
  }
  
  counter.increase().increase().decrease().showValue(); // Должно вывести 1




////////////////////////////////////////////////////////////////////////////////////////////////
  //8. Напишите метод info(), который использует деструктуризацию:                            //
                                                                                              //


  const personal = {
    name: "Иван",
    age: 25,
  
    info() {
    let {name: Имя, age: возраст} = personal
    return 
    

    }
  };
  
  console.log(personal.info()); // "Имя: Иван, возраст: 25"
                                                                                                //
                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////


  //9. obj > 0 // true


const obj = {
    [Symbol.toPrimitive](hint) {
       return hint === "string" ? 1 : 1
    }
}
console.log(obj > 0 )




//10. String(obj < 0) + String(obj < 0) // "truefalse".

const obj2 = {
    firstCall: 0,
    [Symbol.toPrimitive](hint) {

        if (this.firstCall === 0) {
            this.firstCall++
            if(hint === "number") {
                return -1
            }
        } 
        if (hint === "number") {
                return 1}
        }
    
        
       }

    
    

console.log(String(obj2 < 0) + String(obj2 < 0))