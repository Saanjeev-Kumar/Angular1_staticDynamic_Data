import { Component } from '@angular/core';
import { DaataService } from './servicess/daata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-app';
  constructor (private dataService: DaataService) {}

  ngOnInit() {
    // this.dataService.fetchUsers();  // 1st way
  }
}
