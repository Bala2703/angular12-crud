import { Component, OnInit } from '@angular/core';
import { CrudService } from "../services/crud.service";
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
eventName!:string;
eventDate!:number;
message=""
Record: { name: string } = { name: ''};
  constructor(private crudservice:CrudService) { }

  ngOnInit(): void {
    console.log('hi')
  }

  createRecord()
  {
  this.crudservice.create_newEvent(this.eventName).then(() =>
    {
      this.eventName = "";
      console.log( );
      this.message = "Saved";
    }).catch(error => {
      console.log(error)
    })
  }
}
