import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DaataService {

  private users: Array<User> = [
    {
      id:1,
      name: 'John',
      dob: new Date("Dec 21, 2011"),
      income:200,
      isWorking:true,
      image:"https://tse1.mm.bing.net/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=326&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
    },
    {
      id:2,
      name: 'sammy',
      dob: new Date("Jan 22, 2022"),
      income:20000,
      isWorking:true,
      image:"https://tse1.mm.bing.net/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=326&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
    },
    {
      id:3,
      name: 'X',
      dob: new Date("Feb 2, 1987"),
      income:2,
      isWorking:false,
      image:"https://tse1.mm.bing.net/th/id/OIP.NbfPECA64xbFnmW58MbWDQHaEo?w=326&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
    }
  ];

  //Firebase cloud

  private URL: string='https://fir-1-fb125-default-rtdb.firebaseio.com/userdata.json';

  fetchUsers(){
    return this.http.get(`${this.URL}`);
    // this.http.get(`${this.URL}`) // 1st way
    // .subscribe(
    //   res => console.log("RESPONSE",res),
    //   err=> console.log("ERROR",err),
    //   () => console.log("OPERATION COMPLETED")
    // )
  }

// //-----> To populate the data from firebase cloud using promises
// getUser1():Promise<any> {
//   return new Promise<any>((resolve, reject) => {
//     this.fetchUsers().subscribe(
//       res1=>resolve(res1),
//       err1=>reject(err1),
//       ()=>console.log("Completed fetching users")
//     )
// })
// }
// //-----> To populate the data fromfrom firebase cloud uisng callback
// getUserByCallback(cb:any){
//   this.http.get(`${this.URL}`)
//   .subscribe(
//       res => cb(null, res),
//       err=> cb(err),
//       () => console.log("OPERATION COMPLETED")
//   )
// }

//-----> Populate the data here locally
  getUsers():Array<User>{
    return[...this.users];
  }

  constructor(private http: HttpClient) { }
}
