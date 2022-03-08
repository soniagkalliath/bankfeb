import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  accno="Account Number Please"
  acno=""
  pswd=""

   //login group model creation
   loginForm=this.fb.group({
    //form array create
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    
  })


  constructor(private routerLogin:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
//acno change
acnoChange(event:any){
this.acno=event.target.value
console.log(this.acno)
}

//pswd change
pswdChange(event:any){
  this.pswd=event.target.value
  console.log(this.pswd)
  }


  //login - using template reference variable

  // login(a:any,p:any){
    
  //   console.log(a)

  //   var acno= a.value
  //   var pswd = p.value
  //   let database = this.database
  //   if(acno in database){

  //     if(pswd == database[acno]["password"]){
  //       alert("Login Successful!!!")
  //     }
  //     else{
  //       alert("Incorrect password")
  //     }
  //   }
  //   else{
  //     alert("User doesnot exist!!!!")
  //   }
  // }

  login(){
    
    var acno= this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if(this.loginForm.valid){
      const result = this.ds.login(acno,pswd)
      if(result){
          alert("Login Successful!!!")
          this.routerLogin.navigateByUrl("dashboard")
        }
    }
    else{
      alert("Invalid Form")
    }
    
      
  }

}
