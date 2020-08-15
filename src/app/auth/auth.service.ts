import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }
   SignUp(email:string, password:string){
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZOn7qnBch6vBgiSSdiW32J5OD8fKsAqQ',
    {email:email,
    password:password,
    returnSecureToken:true
  })
  .subscribe(resData=>{
      console.log(resData)
    },
    error=>{
      console.log(error)
    })
   }
}
