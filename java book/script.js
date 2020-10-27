"use ctrict";

let a = 2 + 2;

switch (a) {
	case 3:
		console.log('Маловато');
		break;
	case 4:
		console.log('В точку!');
		break;
	case 5:
		console.log('Перебор');
		break;
	default:
		console.log("Нет ни каких значений");
}

let b = "1";
let d = 0;

switch (+b) {
	case d + 1:
		console.log("Hello!");
		break;

	default:
		console.log(" It's not work");
}

let c = 2 + 1;

switch (c) {
	case 4:
		console.log('Правильно!');
		break;

	case 3:
	case 5:
		console.log('Неправильно');
		console.log('Может вам посетить урок математики?');
		break;

	default:
		console.log('Результат выглядит странно');
}





if (browser == 'Edge') {
	console.log("You've got the Edge!");
} else if (browser == 'Chrome' 
	|| browser == 'Firefox'
	|| browser == 'Safari'
	|| browser == 'Opera') {
		console.log('Okay we support these browsers too');
	}else {
		console.log('We hope that this page looks ok!');
	}