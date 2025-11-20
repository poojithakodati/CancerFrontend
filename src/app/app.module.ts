import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GlobalserviceService } from './globalservice.service';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { DeathsperyearComponent } from './deathsperyear/deathsperyear.component';
import { HomeComponent } from './home/home.component';
import { DeathspermonthComponent } from './deathspermonth/deathspermonth.component';
import { DeathspercancerComponent } from './deathspercancer/deathspercancer.component';
import { DeathsperagegroupComponent } from './deathsperagegroup/deathsperagegroup.component';
import { DeathspersmokingComponent } from './deathspersmoking/deathspersmoking.component';
import { DeathsperdrinkingComponent } from './deathsperdrinking/deathsperdrinking.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    DeathsperyearComponent,
    HomeComponent,
    DeathspermonthComponent,
    DeathspercancerComponent,
    DeathsperagegroupComponent,
    DeathspersmokingComponent,
    DeathsperdrinkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    TableModule,
    DropdownModule
  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
