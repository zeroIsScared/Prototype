'use strict';
//Add method "f.defer(ms)" to functions
// importance: 5
// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.


// Function.prototype.defer = function(ms){
// setTimeout(this,ms);
// }

// function f() {
//     alert("Hello!");
//   }
  
//   f.defer(3000);

//   const greetings= function (){
//     console.log(`Hello!`);

//   }

//   greetings.defer(3000);

//   Add the decorating "defer()" to functions
// importance: 4
// Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.

// Here’s an example of how it should work:
// function f1(a, b) {
//     alert( a + b );
//   }
  
  

//   Function.prototype.deffer = function(ms){
//     let f1 = this;
//   return function(...args) {
//     setTimeout(() => f1.apply(this, args), ms);
//   }
//   }

//   f1.deffer(1000)(1, 2);


//   Add toString to the dictionary
// importance: 5
// There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

// Add method dictionary.toString() into it, that should return a comma-delimited list of keys.
//  Your toString should not show up in for..in over the object.

// let dictionary = Object.create(null);

// // your code to add dictionary.toString method
// dictionary.toString= function(){
    
//     return Object.keys(dictionary).join(',');      
    
// }
// Object.defineProperty(dictionary, 'toString',{
//     enumerable: false
// });

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
// }

// // your toString in action
// console.log(dictionary.toString());

// The difference between calls
// importance: 5
// Let’s create a new rabbit object:

// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.sayHi = function() {
//     alert(this.name);
//   };
  
//   let rabbit = new Rabbit("Rabbit");
// //   These calls do the same thing or not? 
//   rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

// Working with prototype
// importance: 5
// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
    jumps: null
  };
  let rabbit1 = {
    __proto__: animal,
    jumps: true
  };
  
//   alert( rabbit1.jumps ); // ? (1)true
  
//   delete rabbit1.jumps;
  
//   alert( rabbit1.jumps ); // ? (2)null
  
//   delete animal.jumps;
  
//   alert( rabbit1.jumps ); // ? (3)undefined

//   Searching algorithm
// importance: 5
// The task has two parts.

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };

//   Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
//It doesn't matter how the glasses property was accessed, in modern JavaScript the speed will be the same.
//____________________________________________________________________________________________________________________________
// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
       }
 
  };
  
  let speedy = {
    __proto__: hamster,
 stomach: []
   
  };
  
  let lazy = {
__proto__: hamster,
stomach: [] 

  }
  
  // This one found the food
  speedy.eat("salat");
  lazy.eat("apple");
  hamster.eat("cherry");

  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  
  console.log( lazy.stomach ); // apple
 
  console.log( hamster.stomach );

//   Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit? Rabit

// let animal1 = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal1
//   };
  
//   rabbit.eat();
//   console.log(rabbit.full);
//   console.log(animal1.full);




  class Clock {
  constructor({template}){
        this.template= template;
        this.timer;
  }
  
  
    render() {
        let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop () {
      clearInterval(this.timer);
    };
  
    start () {
        this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
 clock.stop();
  

//   Error creating an instance
// importance: 5
// Here’s the code with Rabbit extending Animal.

// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit2 = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit2.name);