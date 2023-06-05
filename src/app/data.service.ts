import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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

  getData() {
    return this.activitisData;
  }
}

