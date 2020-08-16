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
  Login(userData:NgForm){
    // console.log('login mode')
    // console.log(userData)
    this.authService.SignIn(userData.value.user_name, userData.value.password)
    userData.reset()
  }

  SignUp(userData:NgForm){
    // console.log('sign up')
    // console.log(userData)
    this.authService.SignUp(userData.value.user_name, userData.value.password)
    userData.reset()
  }
}
