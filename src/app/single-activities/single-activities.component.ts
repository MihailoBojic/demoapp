import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-activities',
  templateUrl: './single-activities.component.html',
  styleUrls: ['./single-activities.component.css']
})
export class SingleActivitiesComponent {
  activity: any
constructor(private http: HttpClient,
  private router: Router){
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.activity = navigation.extras.state['activity'];
    }
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
  //   {
  //     Id: 1,
  //   slika: "../../assets/Thumbnailparagl.png",
  //   tip: "Adventure",
  //   ocjena: 4.5,
  //   opis: "Budva paragliding experie...",
  //   lokacija: "Budva",
  //   cijena: "140$ / Person",
  // },
  // {
  //   id: 2,
  //   slika: "../../assets/Thumbnailslika.png",
  //   tip: "Adventure",
  //   ocjena: 4.5,
  //   opis: "Blue cave and bay of Kotor ...",
  //   lokacija: "Kotor",
  //   cijena: "140$ / Person",
  // }
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
