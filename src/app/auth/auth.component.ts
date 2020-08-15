import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode:boolean= true;
  constructor(private authService:AuthService) { 
    
  }

  ngOnInit(): void {
  }
  Login(userData){
    // console.log('login mode')
    console.log(userData)

  }
  // Logout(userData){
  //   console.log('LogOut')
  // }
  SignUp(userData){
    // console.log('sign up')
    console.log(userData)
    this.authService.SignUp(userData.value.user_name, userData.value.password)

  }
}
