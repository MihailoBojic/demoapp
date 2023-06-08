import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  public swiper: any;
  activity: any;
  toursId:number|any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: DataService
  ) {}

  activities: any[] | any;

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
    this.activities = this.service.getData();
  }
}
