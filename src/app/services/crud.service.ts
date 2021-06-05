import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireservice:AngularFirestore) { }

  create_newEvent(eventName:string){
return this.fireservice.collection('Event').add(eventName);
  }
}
