import { Component } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
	selector : 'app-dummy',
	template : `
		<div>{{dummyService.data}}</div>
	`
})
export class DummyComponent{
	constructor(private dummyService : DummyService) {

	}
}