import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { ActivitiesDataService } from '../activities-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  public swiper: any;
  toursId: number|any;
  activities: any[] | any;
  constructor(private http: HttpClient, private router: Router, private activitiesService: ActivitiesDataService) {}

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

  //   console.log(this.swiper);
  //   this.activities = this.activitiesService.getActivities();
  // }


// onCreateTour(){
//   this.router.navigate(['/create'])
// }
// divClicked(toursId: number) {
//   console.log(toursId);
//   this.router.navigate(['/single'], {queryParams: {id:toursId}});
// }
// }


}
onCreateTour(){}
divClicked(){}
}
