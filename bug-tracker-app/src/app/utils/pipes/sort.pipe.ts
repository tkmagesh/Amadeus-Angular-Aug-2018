import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(p1 : object, p2 : object) : number
}

@Pipe({
	name: 'sort',
	pure : true
})
export class SortPipe implements PipeTransform {

	private getComparerFor(attrName : string ) : Comparer{
		return function (p1 : object, p2 : object) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}
	private getDescendingComparer(comparer : Comparer) : Comparer{
		return function(p1:object, p2:object) : number {
			return comparer(p1, p2) * -1;
	    }
	}
	transform(value: any[], attrName : string, isDescending : boolean = false ): any[] {
		console.log('sort transform triggered');
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparer(comparer);
		return value.sort(comparer);
	}
}