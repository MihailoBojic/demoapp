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
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSliderModule } from '@angular/material/slider';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    PopularPlacesComponent,
    ActivitiesComponent,
    CreateComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
 ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
