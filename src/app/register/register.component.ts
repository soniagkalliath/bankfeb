import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //register group model creation
  registerForm=this.fb.group({
    //form array create
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })

  constructor(private ds:DataService,private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  register(){
   
//console.log(this.registerForm.get('acno')?.errors)
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd
    var uname = this.registerForm.value.uname

    if(this.registerForm.valid){
      const result = this.ds.register(acno,pswd,uname)

      if(result){
        alert("Successfully Registered")
        this.router.navigateByUrl("")
   
      }
      else{
       alert("User already exist.... Please Log In")
      }
    }
    else{
      alert("Invalid Form")
    }
   

  }
}
