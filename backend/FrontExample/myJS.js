// console.log("haha");
//
// var num = 10;
//
// num = "haha";
//
// var str;
//
// console.log(str);
//
// str = "hehe";
//
// console.log(str);

// function test(a , b) {
//     return a + b;
// }
// var compare = function (a , b) {
//     return -a + b;
// }
// var arr = [ 2,3,5,1,4];
// arr.sort(compare);
// console.log(arr);

// undefined - special value in js
// var test;
// console.log(test);
//
// // null
// var empty = null;

// console.log(123);
//
// var x = (function add(a, b) {
//     return a + b;
// }) (3,5);
//
// var add1 = (function(a, b) {
//     return a + b;
// })(1 ,2)



// Array
// var arr = [1, 2, 3]
// var arr1 = [1, 2, 'Joe', 'Curry', 3, undefined, function() {}]
//
// // Object
// var person = {
//     //key : value
//     name : "Joe Curry",
//     age : 20,
//     job : "Full Stack Engineer",
//     // a method in an object
//     sayHello : function() {
//         console.log("hello, this is Joe!");
//     }
// }
//
// console.log(person.name);
// console.log(person['age']);
//
// person.age = 21;
// person['age'] = 30;
// person.sayHello();


// Array
// var arr = [1, 2, 3]
// var arr1 = [1, 2, 'Joe', 'Curry', 3, undefined, function() {}]
//
// // Object
// var person = {
//     //key : value
//     name : "Joe Curry",
//     age : 20,
//     job : "Full Stack Engineer",
//     // a method in an object
//     sayHello : function() {
//         console.log("hello, this is Joe! I' m " + this.age + " years old");
//     }
// }
//
// console.log(person.name);
// console.log(person['age']);
//
// person.age = 21;
// console.log(person['age']);
// person['age'] = 30;
// console.log(person['age']);
// person.sayHello();

// var test;
// console.log(test);
//
// // null
// var empty = null;
// console.log(empty);

// var result = (function () {
//     var name = "Barry";
//     return name;
// })();
//
// // Immediately creates the output:
// console.log(result); // "Barry"



function guess(num, smallerCb, biggerCb, equalCb){
    var random = Math.floor(Math.random() * 100);
    console.log(num, random);

    if(num < random){
        smallerCb();
        return;
    }else if(num > random){
        biggerCb();
        return;
    }
    equalCb();
}

function smaller(){
    console.log('Your num is too small');
}

function bigger(){
    console.log('Your num is too bigger');
}

function equal(){
    console.log('Your guess is right!!');
}

guess(18, smaller, bigger, equal);


