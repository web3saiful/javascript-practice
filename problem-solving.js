// // How can we print numbers from one to six randomly in ludo game?

// function randomNumber(min,max){
// 	return Math.floor(Math.random()*(max-min+1))+min;
// }
// console.log(randomNumber(1,6));







// // `How can we arrage everyone's names alphabetically in our classroom?`

// const students=["Sumit","Saad","Minhaj","amdad sir","brather"];

// console.log(students.sort());






// // `How can we arrage everyone's roll numbers in descending order in our classroom?`	
// const roll_numbers=[8,3,5,1,4,6,2,7];

// console.log(roll_numbers.sort(function(a,b){
// 	return b-a;
// }))





// function isLeapYear(year){
// 	if((year%400===0)|| ((year%4===0)&&(year%100!==0))){
// 		console.log(`${year} is a leap year`);
// 	}else{
// 		console.log(`${year} is not a leap year`);
// 	}
// }

// isLeapYear(3040);




// // how to indicate how many vowel are in the sentanc?
// const vowels=["a","e","i","o","u","A","E","I","o","U"];


// function countVowels(sentence){
// 	let count=0;
// 	const letters=Array.from(sentence);

// 	letters.forEach(function(value){
// 		if(vowels.includes(value)){
// 			count++;
// 		}
// 	});

// 	return  count; 

// }
// console.log(countVowels("Hello World"));










// // How can i remove duplicate numbers from an arry?
// const numbers=[1,4,5,6,7,6,8,9,10,4];

// const duplicate=numbers.filter(function(value,index,array){
// 	return array.indexOf(value)!==index
// });

// console.log(duplicate);









// how many times is the word Sumit used in the following sentence?
// In what number possition was Sumit found for the first time?

const sentance="Learn with Sumit is all about teaching web development skills in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

const matches=sentance.match(/sumit/gi);
console.log(matches);