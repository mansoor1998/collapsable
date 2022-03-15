import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collapsable';

  condition = false;

  constructor(){
    setInterval( () => {
      this.condition = true;
    }, 2000);  
  }

}
