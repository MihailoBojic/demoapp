import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

=======
import { ActivitiesComponent } from './activities/activities.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
>>>>>>> 976bfd2ccef34126d48dcceaf0e6f5abc1d9d965


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
<<<<<<< HEAD
    PopularPlacesComponent
=======
    ActivitiesComponent
>>>>>>> 976bfd2ccef34126d48dcceaf0e6f5abc1d9d965

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
<<<<<<< HEAD
    HttpClientModule
=======
>>>>>>> 976bfd2ccef34126d48dcceaf0e6f5abc1d9d965

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
