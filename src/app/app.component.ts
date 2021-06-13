import { Component,AfterViewInit,ElementRef, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'angular12crud';
userStatus=this.authservice.userStatus
  constructor(private elementRef:ElementRef,private authservice : AuthService){}

  ngOnInit(){
    // this.authservice.userChanges();
    this.authservice.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log(this.userStatus)
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = ' linear-gradient( #111, #2334A0)';
  }
}
