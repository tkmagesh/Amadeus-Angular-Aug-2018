import axios from 'axios';

import { Bug } from '../models/Bug';

export class BugApiService{
	private apiUrl = `http://localhost:3000/bugs`;

	save(bugData : Bug) : Promise<Bug>{
		if (bugData.id === 0){
			return axios.post(this.apiUrl, bugData)
				.then(response => response.data);
		} else {
			return axios.put(`${this.apiUrl}/${bugData.id}`, bugData)
				.then(response => response.data);
		}
	}
	getAll() : Promise<Bug[]> {
		/*let p = axios.get(this.apiUrl);
		let p2= p.then(response => response.data);
		return p2;*/

		/*return new Promise(function(resolve, reject){
			let p = axios.get(this.apiUrl);
			p.then(response => resolve(response.data));
		})*/

		return axios
			.get(this.apiUrl)
			.then(response => response.data)


	}
	remove(bugData : Bug){
		return axios
			.delete(`${this.apiUrl}/${bugData.id}`)
			.then(response => response.data);
	}
}