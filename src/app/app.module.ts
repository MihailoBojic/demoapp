import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ActivitiesComponent } from './activities/activities.component';
import { FormsModule } from '@angular/forms';
=======

import { ActivitiesComponent } from './activities/activities.component';

import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
>>>>>>> 984653500e603ce7d45d752eed213ce0431f7a84


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    PopularPlacesComponent,
<<<<<<< HEAD
    ActivitiesComponent
=======
    ActivitiesComponent,
    CreateComponent
>>>>>>> 984653500e603ce7d45d752eed213ce0431f7a84

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
