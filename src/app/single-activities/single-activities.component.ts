import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-activities',
  templateUrl: './single-activities.component.html',
  styleUrls: ['./single-activities.component.css']
})


export class SingleActivitiesComponent  implements OnInit {
constructor(private http: HttpClient,
  private route: ActivatedRoute,
  private router: Router){

  }

  ngOnInit(): void {
     this.route.queryParams
      .subscribe(params => {
        console.log(params);
      }
    );
  }





  activitisData =  [
    {
      id: 0,
      slika: "../../assets/ThumbnailTara.png",
      tip: "Adventure",
      ocjena: 4.5,
      opis: "Tara river whitewater rafting",
      lokacija: "Zabljak",
      cijena: "140$ / Person",
    },
    {
      id: 1,
    slika: "../../assets/Thumbnailparagl.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Budva paragliding experie...",
    lokacija: "Budva",
    cijena: "140$ / Person",
  },
  {
    id: 2,
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
