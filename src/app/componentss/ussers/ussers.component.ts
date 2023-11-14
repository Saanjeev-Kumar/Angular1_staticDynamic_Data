import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DaataService } from 'src/app/servicess/daata.service';

@Component({
  selector: 'app-ussers',
  templateUrl: './ussers.component.html',
  styleUrls: ['./ussers.component.css']
})
export class UssersComponent implements OnInit {
  // userCollection:User[]; //Error ---> `userCollection' has no initializer and is not definitely assigned in the constructor.`
  userCollection:User[]=[
    //{
  //   id:222,
  //   name: 'XXX',
  //   dob: new Date("Feb 31, 1987"),
  //   income:-11111111,
  //   isWorking:false,
  //   image:"https://tse1.mm.bing.net/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=326&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
  // }
  ];
  // userCollection: User[] | undefined;
  // userCollection!: User[];


  onMoreInfo(u:User): void {
    alert(`Don't Click on the image button please`)
  }

  constructor(private dataa: DaataService){  }

  ngOnInit() : void {
    this.userCollection =this.dataa.getUsers(); //get all user from local data.

    // ---->Promises using resolve >>>>> gets data from cloud
    // this.dataa.getUser1()
    //   .then((res)=>{
    //     this.userCollection=<User[]>res;
    //   })
    //   .catch((err)=>{console.log(err);});


    // ----->Callback function >>>>> gets data from cloud
    // this.dataa.getUserByCallback(this.dataLoading)


    // ----->using Observable the easiest way >>>>> gets data from cloud
    this.dataa.fetchUsers()
    // .subscribe(res => this.userCollection = <User[]> res);
    .subscribe(res => this.userCollection.push(...<User[]>res));// added local and cloud data.
  }

  // private dataLoading(err:any,res:any) {//Callback function with function
  //   if (err) console.log(err);
  //   console.log(res);
  //   // this.userCollection =<User[]>res; //---->Done by callback  function.// throws error due to scope but prints in console.
  // }
  
  onInfo(us:User){
    alert(`Dear ${us.name} ,Thank you for visiting our website`)
  }
}
