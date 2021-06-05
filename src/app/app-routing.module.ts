import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventComponent } from './addevent/addevent.component';
import { IotComponent } from "./iot/iot.component";
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path : '',redirectTo:'/news',pathMatch:'full'},
  {path : 'iot' , component : IotComponent},
  {path : 'news' , component : NewsComponent},
  {path : 'addevent' , component : AddeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
