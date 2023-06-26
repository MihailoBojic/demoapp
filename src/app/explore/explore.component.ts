import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { ActivitiesDataService } from '../activities-data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  public swiper: any;
  toursId: number|any;
  activitiesData: Activity[] = [];
  constructor(private http: HttpClient,
                     private router: Router,
                     private service : DataService) {}

  public ngOnInit() {
    this.swiper = new Swiper('.swiper', {
      slidesPerView: 1.13,
      spaceBetween: 10,
      // Optional parameters
      direction: 'horizontal',

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



    console.log(this.swiper);
  this.service.getActivitiesData().subscribe((response) => {
    console.log(response)
    this.activitiesData = response.data.activities
    console.log(this.activitiesData)
  })



}
onCreateTour(){
  this.router.navigate(['/create'])
}
// divClicked(tour) {
//   console.log(toursId);
//   this.router.navigate(['/single'], {queryParams: {id:toursId}});
// }


}
interface Activity {
  id: number;
  name: string;
  description: string;
  category: string;
  city: string;
  address: string;
  pricing: [
    {
      type: string;
      price: number;
      discount: any[];
    }
  ];
  price: number;
  ranking: number;
}


