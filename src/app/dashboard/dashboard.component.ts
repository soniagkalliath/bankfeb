import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 user:any
   //deposit group model creation
   depositForm=this.fb.group({
    //form array create
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


    //withdraw group model creation
    withdrawForm=this.fb.group({
      //form array create
      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })
  

  constructor(private ds:DataService,private fb:FormBuilder) { 
    this.user=this.ds.currentUname
  }

  ngOnInit(): void {
  }

  //deposit
  deposit(){
   
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){
//calling deposit function of dataService
const result = this.ds.deposit(acno,pswd,amount)

if(result){
  alert(amount+" successfully depositted.. And new balance is "+ result)
}
    }
    else{
      alert("Invalid Form")
    }

  }

  //withdraw
  withdraw(){
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount

    if(this.withdrawForm.valid){
//calling withdraw function of dataService
    const result = this.ds.withdraw(acno,pswd,amount)

    if(result){
      alert(amount+" successfully debitted.. And new balance is "+ result)
    }
  }
  else{
    alert("Invalid Form")
  }
}
}
