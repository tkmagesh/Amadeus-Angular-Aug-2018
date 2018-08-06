import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to app!';

  constructor(){
  	//setTimeout(() => this.clearTitle(), 10000);
  }
  
  clearTitle(){
  	this.title = '';
  }
}
