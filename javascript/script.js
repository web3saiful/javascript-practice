// const element=document.getElementById('demo');

// element.innerHTML=`Today's date is : ${Date()}`;






// const x = document.forms["frm1"];
// console.log(x);
// let text = "";                                   




// const p=document.getElementById("demo");

// p.innerHTML="hello wd";\
















// function validateForm(){
//     const form=document.forms['myForm'];
//     const value=form['fname'].value;
    
//     if(value===''){
//         alert("You must type name");
//         return false;
//     }  
    
// }








// // function styling(){
//     const p=document.querySelector('#demo');
//     p.style.color='red';
//     p.style.fontSize='30px';
// }









// // Animation
// function myMove(){
//     const animate=document.getElementById("animate");
//     let pos=0;

//     const interval=setInterval(frame,5);
//     function frame(){
//         if(pos<350){
//         pos++;
//         animate.style.top=pos+'px';
//         animate.style.left=pos+'px';
//         }else{
//             clearInterval(interval);
//         }
//     }
// }
// myMove();
 





// DOM Event
// function changeText(){
//     const title=document.querySelector('#title');
//   title.innerHTML="hello world";
// };




// const button=document.querySelector('#button');

// button.onclick=function(){
//     console.log("hello world");
// }






// function  changeText(id){
//    console.log(id);
 
// }


// const button=document.querySelector("#button");

// button.onclick=function(){
//     console.log("Hello world");
// }



// function myFunction(){
//     console.log("Hello world");
// }


// button.addEventListener('click',function(){
    //     console.log('Hello world');
    // });
    
    
//     const button=document.getElementById("button");

// button.addEventListener('mouseover',function(){
//     console.log('user put his mouse over this element');
// });



// const button = document.getElementById("button");

// button.addEventListener('mouseout', function() {
//   console.log('User put his mouse over this element');
// });




function myFunction(text){
    console.log(text);
}
const button=document.getElementById("button");

button.addEventListener('mouseover',function(){
    myFunction("hello world");
});