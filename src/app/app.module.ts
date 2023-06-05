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

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSliderModule } from '@angular/material/slider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TravelComponent } from './travel/travel.component';
import { InterestsComponent } from './interests/interests.component';
import { StarratingComponent } from './starrating/starrating.component';
import { BudgetComponent } from './budget/budget.component';
import { SingleActivitiesComponent } from './single-activities/single-activities.component';
import { FeaturedActivitiesComponent } from './featured-activities/featured-activities.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    PopularPlacesComponent,
    ActivitiesComponent,
    TravelComponent,
    InterestsComponent,
    StarratingComponent,
    CreateComponent,
    BudgetComponent,
    SingleActivitiesComponent,
    FeaturedActivitiesComponent,
    FilterComponent

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
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
