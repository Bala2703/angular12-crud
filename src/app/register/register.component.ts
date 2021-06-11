import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email="";
  password="";
  message = '';
  errorMessage="";

  error:{name:string,message:string}={name:'',message:''}

  constructor(private authService:AuthService,private router:Router) { }

    ngOnInit(): void {
    }
    clearErrorMessage(){
      this.errorMessage = '';
      this.error = {name:'',message:''};
    }

  register()

  {
    this.clearErrorMessage();
    if(this.validateForm(this.email,this.password))
    {
      this.authService.registerWithEmail(this. email, this.password).then(()=>{
        this.message="you are registered"
          this.router.navigate(['/welcome'])
  }).catch((_error: { name: string; message: string; }) =>{
    this.error = _error
    this.router.navigate(['/welcome'])
  })
  }
  }
  validateForm(email: string , password: string){
  if(this.email.length === 0)
  {
    this.errorMessage="plz enter email id";
    return false;
  }

  if(this.password.length === 0)
  {
    this.errorMessage="plz enter password" ;
    return false;
  }

  if(this.password.length<6)
  {
    this.errorMessage="password should be atleast 6 characters" ;
    return false;
  }

  this.errorMessage='';
  return true;

  }
  }
