 "use strict";

  let colorEyes;

 let userName = 'Вася';

 let user = userName;
 console.log(user);

 const BLOCK_HEIGHT = 14 + 55;
 console.log(BLOCK_HEIGHT);

 if (true) {
 	var size = 15;
 }

 console.log(size);

 let userAges = 58;
 console.log(userAges);

 console.log(typeof userAges);

 userAges = Boolean(userAges);

 console.log(userAges);
 console.log(typeof userAges);


 console.log("35" + -"22");

 console.log('35' * "22"); 

  // console.log('558' > 22++); 

  let usersCounter = 0;
 let newUsers = usersCounter++;
 console.log(newUsers);

 console.log(!false && 11 || 18 && !''); 

/*   let names = 0;
 console.log(names  ??  "Без имени");  */


  let message = "Привет";
 let messageEnd;


 if (5 > 50) {
 	messageEnd = ", Вася!";
 } else if (5 > 30) {
 	messageEnd = ", Оля!";
 } else if (5 > 10) {
 	messageEnd = ", Андрей!";
 } else if (5 > 1) {
 	messageEnd = ", Иннокентий!";
 } else {
 	messageEnd = ", Миша";
 }

 message += messageEnd;
 console.log(message);



 if (1 === '1') {
 	console.log('Истина!');
 } else {
 	console.log('Ложь!');
 }

 if (5 == '5') {
 	console.log('Истина!');
 } else {
 	console.log('Ложь!');
 }

 let messages = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
 console.log(messages);

 if (0){
 	console.log('Ложь!');
 } else if (" ") {
 	console.log('Истина!');
 } 
 
 let nameCompany = prompt('Какое официальное название JavaScript?');

 if(nameCompany == 'ECMAScript'){
 	alert('Верно!');
 } else {
 	alert('Не знаете?');
 	alert('ECMAScript!');
 }
  
  let userAge = prompt('Введите число');

 if (userAge > 0) {
 	alert(1);
 } else if (userAge < 0) {
 	alert(-1);
 } else {
 	alert(0);
 } 

 let result;
 let a = 2;
 let b = 9;

 result = (a + b < 4) ? 
 alert('Мало'):
 alert('Много');