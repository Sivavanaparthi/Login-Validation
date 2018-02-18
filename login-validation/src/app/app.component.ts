import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
   jsonData = [{
    "name": "john",
    "pwd": "123",
  },
  {
    "name": "david",
    "pwd": "1234",
  },
  {
    "name": "mark",
    "pwd": "12345",
  },
  {
    "name": "kevin",
    "pwd": "12",
  }];

}

