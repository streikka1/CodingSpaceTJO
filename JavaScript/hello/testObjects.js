let carColor = prompt('What color is the car?', 'blue');

function makeCar(speed, color, type) {
	return {
		speed,
		color, 
		type,
		doBreak() { alert('stop!'); },    
	};
}

let mycar = makeCar(110, carColor, 'Combi');

mycar.owner = 'Joe';
mycar.doHorn = () => (alert('tröt')); 

/*
let car = new Object( );
car[speedPropName]= 110;
car.doHorn = () => (alert(car[speedPropName]));
*/

function myAlert() {
//    delete car.maxspeed;
	let carProps = '';
	for (let key in mycar) {
		// obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
		if (mycar.hasOwnProperty(key)) {
			carProps += key + ':' + mycar[key] + '\n';
		}
	}
	//mycar.doHorn();
	alert(carProps);    
}