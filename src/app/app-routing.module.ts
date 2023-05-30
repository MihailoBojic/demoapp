import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TravelComponent } from './travel/travel.component';
import { InterestsComponent } from './interests/interests.component';
import { StarratingComponent } from './starrating/starrating.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'popular_places', component: PopularPlacesComponent},
  {path: 'activities' , component: ActivitiesComponent},
  {path: 'travel' , component: TravelComponent},
  {path: 'interests' , component: InterestsComponent},
  {path: 'starrating', component: StarratingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
