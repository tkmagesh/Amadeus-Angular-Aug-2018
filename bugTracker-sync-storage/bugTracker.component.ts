import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { DummyService } from '../dummy.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : './bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{

	bugs : Bug[] = [];	

	sortBugAttr : string = 'name';

	sortDescending : boolean = false;



	constructor(private bugOperations : BugOperationsService, private dummyService : DummyService ){
		
	}

	ngOnInit(){
		this.bugs = this.bugOperations.getAll();
	}
	
	onNewBugAdded(newBug : Bug){
		this.dummyService.increment();
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
		
	}
	
}





