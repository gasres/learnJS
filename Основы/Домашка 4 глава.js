////////////////////   ДОЛГИ   ////////////////////////
// 
////////////         I. Дополнительно по this            /////////////



//1. Как сделать так, чтобы внутренняя функция получила в this внешннюю?
//-использовать внешнюю функцию как объект, добавив ей в виде метода внутреннюю

function outer() {
    console.log("outer:", this)
  
    function inner () {
      console.log("inner:", this)     // this = outer
    }
  outer.inner = inner
  outer.inner()
  }
  
  
  outer() 
  
  
  
  
  
  
  
  
  //2. Функция внутри функции - как потерять this\как не потерять this
  
  function outer() {
    console.log("outer:", this)            //outer вызывается как метод, this=obj
  
      function inner() {
      console.log("inner:", this)          //inner потеряла this, так как ее контекст вызова-глобал
        }
      inner()
  }
  
  const obj = {}
  
  obj1.methodOuter = outer
  obj1.methodOuter()
  
  
  
  
  /////     a)  использовать стрелку
  
  function outer() {
    console.log("outer:", this)                   //this = obj
  
    const inner = () => {
          return console.log("inner:", this)     //inner получает this из области, где объявлен, т.е. из outer, outer вызывается как метод, поэтому здесь this = obj
        }
  
    inner()
  
  }
  
  const obj = {}
  
  obj.methodOuter = outer
  obj.methodOuter()
  
  
  
  /////      b)  замыкание
  
  function outer() {
    console.log("outer:", this)              //this = obj
  
    const closure = this
    function inner() {
          console.log("inner:", closure)     // this сохранен по ссылке в переменную
        }
  
    inner()
  
  }
  
  const obj = {}
  
  obj.methodOuter = outer
  obj.methodOuter()
  
  
  
  
  /////      c)  привязка через call/bind/apply
  
  function outer() {
    console.log("outer:", this)              //this = obj
  
    
    function inner() {
          console.log("inner:", this)     
        }
  
    inner.call(obj)                         // привязываем контекст к объекту при вызове
    const boundInner = inner.bind(obj)      // или биндим копию функции к объекту
    boundInner()
  
  }
  
  const obj = {}
  obj.methodOuter = outer
  
  obj.methodOuter()
  
  
  
  
  
  
  
  
  
  
  //3. IIFE и this
  
  
  
  //прямая литеральная запись невозможна:
  
  
  const object = {
    prop: 123,
    (method() {
      console.log(this.prop)    
    })()                   // так нельзя
  }   
  
  
  
  //можно через обычный синтаксис, но тогда method перестает быть методом, а становится просто свойством с некоторым вычислением внутри
  
  
  const object = {
    prop: 123,
    method: (function() {
      console.log(this.prop)    //немедленный вызов метода при объявлении приводит к потере this, т.к. функция не вызывается через объект
    })()
  }
  object.method()               //ошибка т.к. в method лежит не функция, а результат вызова IIFE
  
  
  
  //можно пофиксить, сделав так, чтобы IIFE возвращала функцию
  
  
  const object = {
    prop: 123,
    method: (function() {
      return function() {
        console.log(this.prop)       ////результат вызова IIFE - функция, поэтому method - метод и this=object
        }   
    })()
  }
  object.method()
  
  //аналогично со стрелкой:
  
  const object = {
    prop: 123,
    method: (() => {
      return function() {
        console.log(this.prop) 
        }   
    })()
  }
  object.method()
  
  
  
  
  
  
  
  
  ///////////////////////////////////////
  //IIFE внутри "нормального" метода всегда вызывается с глобальным контекстом
  
  
  
  const object = {prop: 123}
  object.method = function() {
      console.log("outer", this.prop),
      
      (function() {
        console.log("inner:", this.prop)   //this потерялся, т.к. содержимое выполняет отдельным блоком, без связи с объектом
      })()
  
  }
  
  object.method()
  
  
  
  /////////////////////
  //фиксится стандартными способами:
  
  
  //явная привязка
  const object = {prop: 123}
  object.method = function() {
      console.log("outer", this.prop),
  
      (function() {
        console.log("inner:", this.prop)    //this жестко привязан на вызове-объявлении
      }).call(object)
  
  }
  
  object.method()
  
  
  //через стрелку
  const object = {prop: 123}
  object.method = function() {
      console.log("outer", this.prop),
  
      (() => {
        console.log("inner:", this.prop)    //this не потерялся, т.к. взят из внешнего контекста стрелки
      })()
  
  }
  
  object.method()
  
  //замыкание
  const object = {prop: 123}
  object.method = function() {
      console.log("outer", this.prop);
      const closure = this;
      (function() {
        console.log("inner:", closure.prop)    //
      })()
  
  }
  
  object.method()
  
  
  
  
  
  
  
  
  //////////////       II Объекты - когда внутри [] надо ставить кавычки, когда нет     /////////////
  
  
  ['']
  
  // 1. если ключ содержит спецсимволы кроме _ и $, начинается с цифры или содержит пробелы
  const obj = {
    "first name": "Alice",
    "@special": 42,
    "123key": "value"
  };
  
  console.log(obj["first name"]); // "Alice"
  console.log(obj["@special"]); // 42
  console.log(obj["123key"]); // "value"
  
  //2. когда надо обратиться к строке-ключу, а не переменной, в которой записан ключ
  
  const key = "a";
  const obj = { a: 100 };
  
  console.log(obj["a"]); // 100, то же самое что прямое обращение к ключу obj.a
  console.log(obj.a)     //100
  console.log(obj[key]); // 100 
  console.log(obj.key); // undefined - ищет свойство с именем "key", такого свойства нету"
  
  
  
  []
  
  //1. если нет недопустимого синтаксиса ключа - пробелы, цифры в начале, спецсимволов
  //2. когда обращаемся к переменной, содержащей имя ключа, а не к самому ключу:
  
  const key = "name";
  const obj = { name: "Bob" };
  
  console.log(obj[key]); // "Bob"
  console.log(obj["key"]); // то же что и obj.key - в объекте нет такого свойства
  console.log(obj["name"]); // "Bob" - обращаемся "по имени"
  
  
  
  
  ///////////////III Преобразование объекта - как из хинта number вернуть строку, а из string число//////////////////
  
  
  const obj = {
    [Symbol.toPrimitive](hint) {
       if (hint === "string") {
        return 2
       } else if (hint === "number") {
        return '2'
       }
       return ''
    }
  }
  
  const num = Number(obj)//string
  const str = String(obj)
  
  console.log(typeof(num)) // все равно number
  console.log(typeof(str)) // все равно string
  