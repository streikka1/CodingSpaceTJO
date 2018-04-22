function Ladder (currentStep) {
	this.currentStep = currentStep;
	this.up = () => { 
		this.currentStep++; 
		return this;
	};
	this.down = (steps) => {
		((this.currentStep - steps) < 0) ? this.currentStep = 0 : this.currentStep -= steps; 	 
		return this;
	};	
	this.showStep = () => {
		return this.currentStep.toString();
	};
}

let myLadder = new Ladder(0);

function myAlert() {

	// alert('test');
	alert(myLadder.up().up().down(2).down(1).up().up().showStep());    
}