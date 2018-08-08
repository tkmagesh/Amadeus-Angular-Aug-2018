import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Bug } from '../models/Bug';
import * as moment from 'moment';

console.log(moment('2018-07-26T09:33:36.892Z').fromNow());


@Component({
	selector : 'app-bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{ bugs | closedCount }}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<hr/>
		<p>{{getCurrentTime()}}</p>
		<hr/>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{
	@Input('data')
	bugs : Bug[] = [];

	getCurrentTime(){
		return Date();
	}
}