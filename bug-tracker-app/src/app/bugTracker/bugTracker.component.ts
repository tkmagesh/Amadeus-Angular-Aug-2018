import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : Bug[] = [];	

	sortBugAttr : string = 'name';

	sortDescending : boolean = false;

	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
	}
	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		//console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}





