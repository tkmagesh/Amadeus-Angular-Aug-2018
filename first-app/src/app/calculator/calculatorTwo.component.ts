import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator-two',
	templateUrl : './calculatorTwo.component.html',
	styleUrls : ['./calculatorTwo.component.css']
})
export class CalculatorTwoComponent{
	model : CalculatorModel = new CalculatorModel();

	operator : string = 'add';

	onCalculateClick(){
		this.model[this.operator]();
	}
}