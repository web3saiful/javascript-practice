
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
let textt="red,green,blue, yellow";;
let result=text.match(/[red|green]/g);
console.log(result);



























