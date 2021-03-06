import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


//INSTALL FIREBASE - npm install --save firebase @angular/fire
//IMPORTS OF FIREBASE


import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment.prod";


//IMPORTS OF ANGULAR MATERIAL

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from "@angular/flex-layout";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IotComponent } from './iot/iot.component';
import { NewsComponent } from './news/news.component';
import { AddeventComponent } from './addevent/addevent.component';
import { CrudService } from "./services/crud.service";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IotComponent,
    NewsComponent,
    AddeventComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
