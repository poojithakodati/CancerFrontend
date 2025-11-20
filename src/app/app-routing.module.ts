import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsperyearComponent } from './deathsperyear/deathsperyear.component';
import { HomeComponent } from './home/home.component';
import { DeathspermonthComponent } from './deathspermonth/deathspermonth.component';
import { DeathspercancerComponent } from './deathspercancer/deathspercancer.component';
import { DeathsperagegroupComponent } from './deathsperagegroup/deathsperagegroup.component';
import { DeathspersmokingComponent } from './deathspersmoking/deathspersmoking.component';
import { DeathsperdrinkingComponent } from './deathsperdrinking/deathsperdrinking.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"deathsperyear",
    component: DeathsperyearComponent
  },
  {
    path:"deathspermonth",
    component: DeathspermonthComponent
  },
  {
    path:"deathspercancer",
    component:DeathspercancerComponent
  },
  {
    path:"deathsperagegroup",
    component: DeathsperagegroupComponent
  },
  {
    path: "deathsforsmoking",
    component: DeathspersmokingComponent
  },
  {
    path: "deathsfordrinking",
    component: DeathsperdrinkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
