import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivitiesComponent } from './activities/activities.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { TravelComponent } from './travel/travel.component';
import { InterestsComponent } from './interests/interests.component';
import { StarratingComponent } from './starrating/starrating.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    PopularPlacesComponent,
    ActivitiesComponent,
    CreateComponent,
    TravelComponent,
    InterestsComponent,
    StarratingComponent

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
