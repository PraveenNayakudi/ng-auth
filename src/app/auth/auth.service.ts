import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
interface AuthResponseData{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user = new BehaviorSubject<User>(null)
  constructor(private http:HttpClient, private router:Router) {

   }
   SignUp(email:string, password:string){
     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZOn7qnBch6vBgiSSdiW32J5OD8fKsAqQ';
     this.HandleAuthentication(email,password,url)
   }
   SignIn(email:string, password:string){
     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZOn7qnBch6vBgiSSdiW32J5OD8fKsAqQ';
     this.HandleAuthentication(email,password,url)
   }

   Logout(){
     this.user.next(null)
    localStorage.removeItem('UserData')
    this.router.navigate(['/auth'])
   }

   autoLogin(){
     const userData = JSON.parse(localStorage.getItem('UserData'))
     if(!userData){
       return
     }
     const loadeduser= new User(userData.email, userData.idToken, new Date(userData.expirationTime) )
     this.user.next(loadeduser)
   }
   autoLogout(){
     const expirationIn = new Date(JSON.parse(localStorage.getItem('UserData')).expirationTime).getTime() - new Date().getTime()
    setTimeout(()=>{
      this.user.next(null)
      localStorage.removeItem('UserData')
    },expirationIn)
   }


   private HandleAuthentication(email:string, password:string, url:string){
    return this.http.post<AuthResponseData>(url,
    {email:email,
    password:password,
    returnSecureToken:true
  })
  .subscribe(resData=>{
      console.log(resData)
      const ExpirationDate = new Date(new Date().getTime()+ +resData.expiresIn*1000)
      const UserObj = new User(resData.email,resData.idToken, ExpirationDate)
      this.user.next(UserObj)
      this.router.navigate(['/shop'])
      localStorage.setItem('UserData',JSON.stringify(UserObj) )
      this.autoLogout()
    },
    error=>{
      console.log(error)
    })
   }
   
}
