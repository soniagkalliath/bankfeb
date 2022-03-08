import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any
  currentUname:any

  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Vyom",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Laisha",password:1002,balance:5000,transaction:[]}
  }

  constructor() { }

//register 
  register(acno:any,password:any,uname:any){

    let database = this.database

    if(acno in database){
      return false
    }
    else{

      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database)
      return true
    }
  }


  //login
  login(acno:any,password:any){
    let database = this.database

    if(acno in database){

      if(password == database[acno]["password"]){
        this.currentAcno = acno

        this.currentUname = database[acno]["uname"]
       return true
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User doesnot exist!!!!")
      return false
    }
  }

  //deposit

  deposit(acno:any,password:any,amt:any){

    var amount = parseInt(amt)

    let database = this.database

    if(acno in database){

      if(password == database[acno]["password"]){

        database[acno]["balance"]+=amount

        database[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        })
      //  console.log(database)
        return database[acno]["balance"]
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User doesnot exist!!!!")
      return false
    }
  }


   //withdraw

   withdraw(acno:any,password:any,amt:any){

    var amount = parseInt(amt)

    let database = this.database

    if(acno in database){

      if(password == database[acno]["password"]){

        if(database[acno]["balance"]>amount){

          database[acno]["balance"]-=amount
          database[acno]["transaction"].push({
            amount:amount,
            type:"DEBIT"
          })
          console.log(database)
          return database[acno]["balance"]

        }
        else{
          alert("Insufficient Balance")
          return false
        }
       
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User doesnot exist!!!!")
      return false
    }
  }



  //transaction
  getTransaction(acno:any){

    return this.database[acno]["transaction"]
  }
}
