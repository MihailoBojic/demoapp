import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CreateComponent } from './create/create.component';
import { SingleActivitiesComponent } from './single-activities/single-activities.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'popular_places', component: PopularPlacesComponent},
  {path: 'activities' , component: ActivitiesComponent},
  {path: 'create', component: CreateComponent},
  {path: 'single', component: SingleActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
