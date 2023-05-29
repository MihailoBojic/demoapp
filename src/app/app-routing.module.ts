import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
<<<<<<< HEAD
import { PopularPlacesComponent } from './popular-places/popular-places.component';
=======
import { ActivitiesComponent } from './activities/activities.component';
>>>>>>> 976bfd2ccef34126d48dcceaf0e6f5abc1d9d965

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
<<<<<<< HEAD
  {path: 'popular_places', component: PopularPlacesComponent}
=======
  {path: 'activities' , component: ActivitiesComponent}
>>>>>>> 976bfd2ccef34126d48dcceaf0e6f5abc1d9d965
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
