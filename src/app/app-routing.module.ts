import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from "./iot/iot.component";
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';

const routes: Routes = [
  {path : '',redirectTo:'/home',pathMatch:'full'},
  {path : 'iot' , component : IotComponent},
  {path : 'news' , component : NewsComponent},
  {path : 'addevent' , component : AddeventComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'admin' , component : AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
