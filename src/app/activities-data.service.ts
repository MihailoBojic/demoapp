import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesDataService {

  constructor(private http: HttpClient) { }

  private activitiesData =[
    {
      id:0,
      slika: "../../assets/Thumbnailslika.png",
      tip: "Adventure",
      ocjena: 4.5,
      opis: "Blue cave and bay of Kotor ...",
      lokacija: "Kotor",
      cijena: "140$ / Person",
    },
    {
      id:1,
    slika: "../../assets/ThumbnailPerast.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Perast, Lady of the Rock, an...",
    lokacija: "Perast",
    cijena: "140$ / Person",
  },
  {
    id:2,
    slika: "../../assets/Thumbnailslika.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Blue cave and bay of Kotor ...",
    lokacija: "Kotor",
    cijena: "140$ / Person",
  }
]

jsonRequest = JSON.stringify(this.activitiesData)

fetchData() {
  this.http.get<any[]>(this.jsonRequest).subscribe(
    (data:any) => {
      this.activitiesData = data;
          },
          (error: any) => {
            console.error("Doslo je do greske:", error)
          }
  )
}

getActivities() {
  return this.activitiesData;
}

}
