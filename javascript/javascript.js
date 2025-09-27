
// foreach  s24
// const numbers=[45,4,9,16,25];



//  function myFunction(value,index,array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
//  }

//  numbers.forEach(myFunction);





// map s24
// const numbers =[45,4,9,16,25]

// function myFunction(value){
//     return value*2;

// }

// const newNumbers =numbers.map(myFunction);

// console.log(newNumbers); 






// // filter s24
// const numbers =[45,4,9,16,25]

// function myFunction(value){
//     return value>10;

// }
// const newNumbers =numbers.filter(myFunction);

// console.log(newNumbers); 






// // reduce s24 

// const numbers =[45,4,9,16,25];
// function myFunction(total,value,index,array){
//     return total+value;
// }


// const newNumbers=numbers.reduce(myFunction ,10)

// console.log(newNumbers);






// // Array.every  s24
// const numbers =[45,4,9,16,25];
// function myFunction(value,index,array){
//     return value>18;
// }


// const newNumbers=numbers.every(myFunction)

// console.log(newNumbers);






// //  Array.some
// const numbers =[45,4,9,16,25];
// function myFunction(value,index,array){
//     return value>138;
// }

// const newNumbers=numbers.some(myFunction)
// console.log(newNumbers);



// Date 
// const mydate=new Date();

// console.log(mydate.toDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.getMonth());
// console.log(mydate.getMonth());
// console.log(mydate.getDate());
// console.log(mydate.getMinutes());
// console.log(mydate.getMilliseconds());


// date method
// const today =new Date();
// console.log(today.getFullYear());


// const months=["january","February","March","April","May","jume","july","August","September","October","November","December"];

// console.log(today.getMonth());

// const d =new Date();
// console.log(d.getHours());
// console.log(d.getMilliseconds);



// date-adding day
// const d =new Date();
// d.setDate(d.getDate()+50);
// console.log(d.toDateString());





// date
// const d=new Date ();
// d.setHours();
// console.log((d));




// problem solving


// alphabetically
// const students=["Sumit","Saad","Daiyan","Akash"];
// console.log(students.sort()); 
// console.log();





// 1 to 6 for lodo game
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min; >>>>>>?????????????????
// }
// console.log(getRandomNumber(1,6));







// // condition
// let age=18;
// if(age<18){
//     console.log("You are young!");
// }else if(age==18){
//     console.log("welcome Adult!");
// }else if (age>18 && age <30){
//     console.log("you are matured!");
// }else{
//     console.log("You are old!")
// }






// let i=5;

// // for (let i=0; i<10; i++){
// //     console.log(i);
// // }
// console.log("thi9s is",i);





// to see the value of person 
// const person={fname:"john",Imame:"Doe",age:25};

// for (let x in person){
//     console.log(person[x]);
    
// }


// let a ="8812324567";

// for(let x in a){
//     console.log(x);
// }





// let i =0;
// let text ="";

// while(i<10){
//     text += "The number"+i;
//     i++;
// }
// console.log(text);








// break and continue
// for (var i =0;i<=10;i++){
//     if(i==5){
//             console.log("Inshallah");
//     continue;
//     }
//     console.log(i);
// }


  




// // js set
// const letters=new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// console.log(letters);








// const fruits =new Map();

// fruits.set("apples",500);
// fruits.set("banannas",300);
// fruits.set("orenges",200);

// console.log(fruits);








// const person={
//     fname:'Bangladesh'
// };


// console.log(person['fname'


 






//  RegExp  search
// let text="Visit W3Schools";
// let n=text.search("w3Schools");
// console.log(n);







//  RegExp rep
// let text="visit Microsoft!";
// let result=text.replace("Microsoft","W3Schools");
// console.log(result);







//  RegExp  replace
// let text="Visit Microsoft!";
// let result=text.replace(/microsoft/i,"W3Schools");
// console.log(result);







//  RegExp  match
// let text="Please Visit W3School Powered by W3School";
// let result=text.replace(/microsoft/ig,"W3Schools");
// console.log(result);






//  RegExp  match
// let text="Is this all there is?";
// let result=text.match(/[h]/g);
// console.log(result);








//  RegExp  match number [ matcha array redtuns kore]
// let text="123456789";
// let result=text.match(/[1-4]/g);
// console.log(result);







//  Regular Expression  match or 
// let text="red,green,blue, yellow";
// let result=text.match(/red|green/g);
// console.log(result);




// getting first position of word
// let text="HEllo LOOk At You";
// let result=text.search(/\bLO/);
// console.log(result);





// RegExp Quantier
// let text="HElloooo World, Hello W3Schools";
// let result=text.match(/lo*/g);
// console.log(result);



// error 
// try{
//     adddlert("Welcome guest!");   [ adddlery is error]
// }
// catch(err){
//     console.log(err.message);

// }




//   let x = 12;
//   try {
//     if(x == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw {
//         message:"Too hight",
//         name:"HightError"
//     };

//   }
//   catch(error) {
//     console.log("error");
//     console.log(error.name);
//     console.log(error.message
//   }
// console.log("This is a test");
 



// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };



// method in object
// const person={
//   firstName:"John",
//   lastName:"Doe",
//   id:5566,
//   fullName:function(){
//     return this.firstName+" "+this.lastName;
//   }
// };

// console.log(person.fullName());







// this in javascript
// const person={
//   firstNmae:"john",
//   lastName:"Doe",
//   id:5566,
//   myFunction:function(){
//     return this;
//   }
// };


// console.log(person.myFunction());










// // class in js
// class person{
// constructor(name,age){
//   this.name=name;
//   this.age=age;
//   }
// }

// const person1=new person("JoHn",19);
// const person2=new person("Saiful",25);
// console.log(person1.name);
// console.log(person2.age);





// // class in js
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   play(status){
//     console.log(`${this.name} is playing ${status}`);
//   }
// }

// const person1 = new Person("JoHn", 19);
// const person2 = new Person("Saiful", 25);

// person1.play("well");
// person2.play("bad");











// // problelm solving
// function linearSearch(arr,val){
//   const length=arr.lenght;

//   for(let i=0;i<length;i++){
//     if(arr[i]===val){
//       return i;
//     }
//   }
//   return'not found!';
// }

// console.log(linearSearch(['a','b','c','d','c'],'c'));



// obg 
// const person={
//   name:'Sumit',
//   age:35,
//   getName:function(){
//     return 'Sumit';
//   }
// }
// const person2=person;

// person.age=36;

// console.log(person2);










// object property
// const person={
//   name:'Sumit',
//   age:35,
// };

// console.log(person.age);

// let a ='age';

// console.log(person[a]) array syntext
// console.log(person.a) // undefined, wrong











// // object properties
// const person={
//   fname:" Sumit",
//   lname:" Kumar",
//   age:25

// };

// let txt='';

// for (let x in person){
//   // txt += person[x];
// txt = txt + person[x]; ??????????????Don't unederstand [x]


// }


// console.log(txt);







// add Object propert
// const person={
//     name:"john",
//     Age:25,
//     city:"New York",

// };
// console.log(JSON.stringify(person));







// // constructor object 
// function person(first, last ,age){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.fullName=function(){
//         return this.firstName+" "+this.lastName
//     }
// }

// const sumit= new person  ("Sumit","Kumar", 35);
// const jasim=new person("Jasim","uddin",30);
// const rahim=new person("Rahim","khan",32);

// console.log(jasim.fullName());










// // prototype object
// function person(first, last ,age){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.fullName=function(){
//         return this.firstName+" "+this.lastName
//     }
// }

// const sumit= new person  ("Sumit","Kumar", 35);
// const jasim=new person("Jasim","uddin",30);
// const rahim=new person("Rahim","khan",32);


// person.prototype.country="Bangladesh";

// console.log(rahim.country);











// // prototype object
// function person(first, last ,age){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.fullName=function(){
//         return this.firstName+" "+this.lastName
//     }
// }

// const sumit= new person  ("Sumit","Kumar", 35);
// const jasim=new person("Jasim","uddin",30);
// const rahim=new person("Rahim","khan",32);



// const john={new String('John')};
// String.prototype.
// console.log(john.toUpperCase());





// // setter 
// const person={
//     firstName:"Sumit",
//     lastName:"Kumar",
//     language:"",
//     set lang(lang){
//         this.language=lang
//     }
// };

// person.lang="bn";

// console.log(person);








// // getter and setter defineProperty
// const person={
//     firstName:"Sumit",
//     lastName:"Doe"
// };

// Object.defineProperty(person,"fullName",{
//     get :function(){
//         return this.firstName+' '+this.lastName;
//     }
// });
 








// set in js
// const letters=new Set(['a','b','c']);

// const lettersIterator =letters.values();

// for (let a of lettersIterator){
//     console.log(a);
// }





// set in js
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};

//     // create a Map
// const fruits=new Map();

//    // add map Elements to the map
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,200);

// console.log(fruits.get(apples)); 
// // m





// // funcion
// const a=function(){
//     let c=5;
//     return c;
// }

// console.log(a());








// // self-invoking function
// (function(){
//     console.log("I am a self invoking function");
// })();






// function myFunction(a,b){
//     return a*b;
// }

// const result=myFunction(4,3);

// console.log(result);








// function myFunction(a,b){
//     console.log("Hello");
//     return a*b;
// }

// const result=myFunction(4,3);

// console.log(result);







// sort form of function

// const x= function(x,y){
//     return x*y;
// }

// const x =(x,y)=>x*y;  *****************great***********************

// console.log(x(4,3));








// aktu advance function
// function a(x,y){
//     x=x*5;
//     return x*y;
// }

// let m=5;
// let n=6;

// console.log(a(m,n));










// function a(x){
//     x.one=7;
//     return x.one*x.two;
// }

// let m ={
//     one:4,
//     two:5
// };

// console.log(a(m));

// console.log();








// // call function
// const a={
//     firstName:'Sumit',
//     sleep: function(){
//         console.log(`${this.firstName} an sleepingd`);
//     }
// }

// a.sleep();









// call function
// const person={
//     fullName:function(){
//         return this.firstName+""+this.lastName;
//     }
// };

// const person1={
//     firstName:"John",
//     lastName:"Doe"
// };

// const person2={
//     firstName:"Mary",
//     lastName:"Doe"
// };

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));







// var globalVar = "আমি গ্লোবাল!";

// function myFunction() {
//   console.log(globalVar); // গ্লোবাল ভেরিয়েবল অ্যাক্সেস করা হচ্ছে
// }

// myFunction(); // আউটপুট: আমি গ্লোবাল!

// ********vs********


// function myFunction() {
//   var localVar = "আমি লোকাল!";
//   console.log(localVar); // লোকাল ভেরিয়েবল অ্যাক্সেস করা হচ্ছে
// }

// myFunction(); // আউটপুট: আমি লোকাল!
// console.log(localVar); // এরর: localVar সংজ্ঞায়িত করা হয়নি




 



// function add(){
//     let counter=0;
//     counter=counter+1;
//     return counter;
// }
// add();
// add();
// add();

// console.log(counter);






// // declaration in global without strict mode
// function myFunction() {
//    a = 4;
// }
// myFunction();
// console.log(a);







// A Counter Dilemma
// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3







// // scope
// var x=23;
// // parent er dunia
// function myFunc(){
//     // child er dunia
//     var y=10;
//     console.log(`${x} from myfunction()`);
// }

// myFunc();

// console.log(x);








// // scope replace var with second declaration
// var x=23;
// // parent er dunia
// function myFunc(){
//     // child er dunia
//     x=10;
//     console.log(`${x} from myfunction()`);
// }
// myFunc();

// console.log(x);








// // closures are not that scary
// var num1=2;
// var num2=3;
// var sum=function(){
//     return num1+num2;
// }
// console.log(sum(2,3));








// // Accessor
// const person={
//   firstName:"John",
//   lastName:"Doe",
//   language:"en",
//   get fullName(){
//     return this.language
//   }
// }

// console.log(person.language);









// // Accessor
// const person={
//   firstName:"John",
//   lastName:"Doe",
//   language:"en",
//   get lang(){
//     return this.language;
//   }
// }
// console.log(person.lang);






// // Accessor
// const person={
//   firstName:"John",
//   lastName:"Doe",
//   language:"en",
//   set  lang(lang){
//     this.language=lang
//   }
// }

// person.lang="bn";
// console.log(person);








// const person={
//   firstName:"John",
//   lastName:"Doe"
// };

// Object.defineProperty(person,"fullName", {
//    get:function(){
//     return this.firstName+' '+this.lastName;
//    }
 
// });

// person.age=35;

// console.log(person.fullName); 










// let counter=0;

// function add(){
  
//   counter+=1;
// }

// add();
// add();
// add();






// // closur
// let counter = 0; 

// function add() {
//   return counter += 1; /*it can memorise 1148 number line . that way it can increase the number */
// };

// console.log(add()); 
// console.log(add()); 
// console.log(add()); 
// console.log(add()); 
// console.log(add()); 
// console.log(add()); 

// // console.log(counter)









//closure
// function temporary(){
//   let counter=0; /* she mone rakte parey call hoyar pore*/

//   return function lang(){
//     counter+=1;
//     return counter
//   }
// };


// const add= temporary();

// add();







// // class
// class car {
//   constructor(name,year){
//     this.name=name;
//     this.year=year;

//   }

//   run(speed){
//     console.log(this.name+'is running in '+ speed)
//   }
// }

// const bmw=new car('BMW', 1999);
// const audi=new car('Audi',2000)

// audi.run('100 km per hour');







//  Inheritance
// class car{
//   constructor(brand){
//     this.carname=brand;
//   }
//   present(){
//     return 'I have a '+ this.carname;
//   }
// }
// class Model extends car{
//   constructor(brand, mod){
//     super(brand)
//     this.model=mod;
//   }
//   show(){
//     return this.present() + ',it is a '+ this.model;
//   }
// }

// let myCar=new Model("Ford","Mustang");


// console.log(myCar.show());







class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
console.log(Car.hello());

// But NOT on a Car Object:

 












