import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
getActivitiesData(): Observable<any> {
   return this.http.get('../../assets/activities-modified.json')
  }

  // activitisData = []
  //   {
  //     id: 0,
  //     slika: "../../assets/ThumbnailTara.png",
  //     tip: "Adventure",
  //     ocjena: 4.5,
  //     opis: "Tara river whitewater rafting",
  //     lokacija: "Zabljak",
  //     cijena: "140$ / Person",
  //   },
  //   {
  //     id: 1,
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

  //  jsonRequest = JSON.stringify(this.activitisData)

}

