import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridJoggingComponent } from './grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './add-or-update-jogging/add-or-update-jogging.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutService } from './workout.service';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';


import { HTTP_INTERCEPTORS } from '@angular/common/http';



const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
