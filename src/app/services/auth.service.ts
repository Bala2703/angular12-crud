import { Injectable,NgZone } from '@angular/core';
import {  AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;



  constructor(private afu: AngularFireAuth, private router: Router,
    private ngZone:NgZone,private firestore : AngularFirestore) {
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }

public currentuser : any;
public userStatus! : string;
public userStatusChanges : BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);

setUserStatus(userStatus:any):void{

  this.userStatus = userStatus;
  this.userStatusChanges.next(userStatus);
}

signUp(email : string,password: string){

  this.afu.createUserWithEmailAndPassword(email,password)
  .then((userResponse)=>
  {
    let user =
    {
      id : userResponse.user?.uid,
      username : userResponse.user?.email,
      role : "user",
    }

    //add user in database
    this.firestore.collection("users").add(user)
    .then(user =>
      {
        user.get().then(x=>
          {
            console.log(x.data);
            this.currentuser = x.data;
            this.setUserStatus(this.currentUser);
            this.router.navigate(["/"])
          })
      }).catch(err =>
        {
          console.log(err);
        })
  }).catch((err) =>{
    console.log("An error Occured:",err);
  })
}

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }



  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/iot']);
  }

  }
