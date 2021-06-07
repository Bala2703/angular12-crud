import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { HomeComponent } from './home/home.component';
import { IotComponent } from "./iot/iot.component";
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path : '',redirectTo:'/home',pathMatch:'full'},
  {path : 'iot' , component : IotComponent},
  {path : 'news' , component : NewsComponent},
  {path : 'addevent' , component : AddeventComponent},
  {path : 'home' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
