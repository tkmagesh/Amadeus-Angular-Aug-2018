import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BugApiService{
	private apiUrl = `http://localhost:3000/bugs`;

	constructor(private httpClient : HttpClient){

	}

	save(bugData : Bug) : Observable<Bug>{
		if (bugData.id === 0){
			return this.httpClient.post<Bug>(this.apiUrl, bugData);
		} else {
			return this.httpClient.put<Bug>(`${this.apiUrl}/${bugData.id}`, bugData);
		}
	}

	getAll() : Observable<Bug[]> {
		return this.httpClient
			.get<Bug[]>(this.apiUrl);
	}
	remove(bugData : Bug) : Observable<any>{
		return this.httpClient
			.delete<any>(`${this.apiUrl}/${bugData.id}`)
			
	}
}