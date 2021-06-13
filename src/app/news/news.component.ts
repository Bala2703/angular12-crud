import { Component, Inject, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { DOCUMENT } from '@angular/common';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  Event:any;

  gridColumns = 3;


  userStatus=this.authService.userStatus
  constructor(private authService: AuthService,private crudservice:CrudService,@Inject(DOCUMENT) private document:Document) {

  }
    ngOnInit(): void {
      this.authService.userStatusChanges.subscribe(x => this.userStatus = x);
      console.log(this.userStatus)
    this.getEvent();
  }

  onSelect(){
    this.document.location.href = "{{event.payload.doc.data().link}}"
  }

  getEvent = () =>
  this.crudservice
    .get_Allevent()
    .subscribe(res => (this.Event = res));
    deleteEvent = (data: any)=>this.crudservice.deleteEvent(data);
    markevent = (data: any) => this.crudservice.updateEvent(data);

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
