import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public swiper: any;

 activitiesData: Activity[] = [];

  constructor(private http: HttpClient,
    private router: Router,
    private service: DataService) {}


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

    this.service.getActivitiesData().subscribe((response) => {
      console.log(response)
      this.activitiesData = response.data.activities
      console.log(this.activitiesData)
    })

  }



  onLoad(activity: any) {
    console.log(activity)
    this.router.navigate(
      ['/single'],
      { queryParams: {id: activity.id} }
      );
  }

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
