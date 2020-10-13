'use strict';

 if (12 == 13) {
	console.log('Yes!');
} else{
	console.log('No!');
} 

const num = 50;

switch (num) {
	case 49:
		console.log('No!');
		break;
	case 100:
		console.log('No!');
		break;
	case 50:
		console.log('Yes!');
		break;
	default:
		console.log('Не в этот раз');
		break;
}