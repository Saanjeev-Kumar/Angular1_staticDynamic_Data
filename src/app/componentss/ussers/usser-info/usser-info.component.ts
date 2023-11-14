import { Component,Input,Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-usser-info',
  templateUrl: './usser-info.component.html',
  styleUrls: ['./usser-info.component.css']
})
export class UsserInfoComponent {
  @Input()
  item!: User;

    //EventDriven from child to parent ---> 
    @Output() onChildEvent=new EventEmitter<User>();
    onMoreInfo(u:User): void {
      this.onChildEvent.emit(u);
    }

}
