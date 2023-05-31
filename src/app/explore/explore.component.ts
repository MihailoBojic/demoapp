import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  public swiper: any;
  constructor(private http: HttpClient, private router: Router) {}

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
  }

  toursData =  [
    {
      slika: "../../assets/Thumbnailslika.png",
      tip: "Adventure",
      ocjena: 4.5,
      opis: "Blue cave and bay of Kotor ...",
      lokacija: "Kotor",
      cijena: "140$ / Person",
    },
    {
    slika: "../../assets/ThumbnailPerast.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Perast, Lady of the Rock, an...",
    lokacija: "Perast",
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

jsonRequest = JSON.stringify(this.toursData)

fetchData() {
  this.http.get<any[]>(this.jsonRequest).subscribe(
    (data) => {
      this.toursData = data;
          },
          (error) => {
            console.error("Doslo je do greske:", error)
          }
  )
}
onCreateTour(){
  this.router.navigate(['/create'])
}
}
