import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
//import { BugStorageService } from './bugStorage.service';
import { BugApiService } from './bugApi.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugApi : BugApiService ){

	}
	createNew(bugName : string) : Promise<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugApi.save(newBugData);
	}

	toggle(bugToToggle : Bug) : Promise<Bug> {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugApi.save(toggledBug);
	}

	getAll() : Promise<Bug[]>{
		return this.bugApi.getAll();
	}

	remove(bug : Bug) : Promise<any>{
		return this.bugApi.remove(bug);
	}
	
}