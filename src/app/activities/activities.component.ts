import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  public swiper: any;
  constructor(private http: HttpClient) {}

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


  }


    activitisData =  [
    {
      slika: "../../assets/ThumbnailTara.png",
      tip: "Adventure",
      ocjena: 4.5,
      opis: "Tara river whitewater rafting",
      lokacija: "Zabljak",
      cijena: "140$ / Person",
    },
    {
    slika: "../../assets/Thumbnailparagl.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Budva paragliding experie...",
    lokacija: "Budva",
    cijena: "140$ / Person",
  },
  {
    slika: "../../assets/Thumbnailslika.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Blue cave and bay of Kotor ...",
    lokacija: "Kotor",
    cijena: "140$ / Person",
  }
  ]
   jsonRequest = JSON.stringify(this.activitisData)


  fetchData() {
    this.http.get<any[]>(this.jsonRequest).subscribe(
      (data) => {
        this.activitisData = data;
        console.log(data)
            },
            (error) => {
              console.error("Doslo je do greske:", error)
            }
    )
  }
}
