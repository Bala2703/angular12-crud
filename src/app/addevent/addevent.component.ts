import { Component, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  Event:any;
  myArray: any[] = []
eventName!:string;
eventDate!:string;
eventLink!:string;
eventDescription!:string;
message=""
// Record: { name: string } = { name: ''};
  constructor(private crudservice:CrudService,
    private router : Router,
   private afu:AngularFireAuth, private firestore: AngularFirestore,private authservice:AuthService) { }

  ngOnInit(): void {
      this.getEvent();

  }

  getEvent = () =>
  this.crudservice
    .get_Allevent()
    .subscribe(res => (this.Event = res));
    deleteEvent = (data: any)=>this.crudservice.deleteEvent(data);
    markevent = (data: any) => this.crudservice.updateEvent(data);

  Open()
  { console.log("works")
  let Record:any = {};
  Record['name'] = this.eventName;
  Record['date'] = this.eventDate;
  Record['link'] = this.eventLink;
  Record['description'] = this.eventDescription;
  this.crudservice.create_newEvent(Record).then(() =>
    {
      this.eventName = "";
      console.log( );
      this.message = "Saved";
    }).catch(error => {
      console.log(error)
    })
  }

  signout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/iot']);
  }
}
