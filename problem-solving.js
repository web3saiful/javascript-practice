// // How can we print numbers from one to six randomly in ludo game?

// function randomNumber(min,max){
// 	return Math.floor(Math.random()*(max-min+1))+min;
// }
// console.log(randomNumber(1,6));







// // `How can we arrage everyone's names alphabetically in our classroom?`

// const students=["Sumit","Saad","Minhaj","amdad sir","brather"];

// console.log(students.sort());






const roll_numbers=[8,3,5,1,4,6,2,7];

console.log(roll_numbers.sort(function(a,b){
	return b-a;
}))