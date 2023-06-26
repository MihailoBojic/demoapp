import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesDataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    const url = 'C:\Users\Branka Sosic\Desktop\zajednicki\demoapp\src\app\activities-modified.json';
     this.http.get(url).subscribe(
       (data:any) => {
        var activities = data.data.activities;

        console.log(activities);
             },
              (error: any) => {
             console.error("Doslo je do greske:", error)
             })
  }

  //   const url = 'C:\Users\Branka Sosic\Desktop\zajednicki\demoapp\src\app\activities-modified.json';
  // this.http.get(url).subscribe(
  //   (data: any) => {
  //     const activities = data.data.activities.id;
  //     // Možete dalje koristiti podatke o aktivnostima ovde
  //     console.log(activities);
  //   },
  //   (error: any) => {
  //     console.error('Greška prilikom fetchovanja podataka:', error);
  //   }
  // );



//   private activitiesData =[
//     {
//       id:0,
//       slika: "../../assets/Thumbnailslika.png",
//       tip: "Adventure",
//       ocjena: 4.5,
//       opis: "Blue cave and bay of Kotor ...",
//       lokacija: "Kotor",
//       cijena: "140$ / Person",
//     },
//     {
//       id:1,
//     slika: "../../assets/ThumbnailPerast.png",
//     tip: "Adventure",
//     ocjena: 4.5,
//     opis: "Perast, Lady of the Rock, an...",
//     lokacija: "Perast",
//     cijena: "140$ / Person",
//   },
//   {
//     id:2,
//     slika: "../../assets/Thumbnailslika.png",
//     tip: "Adventure",
//     ocjena: 4.5,
//     opis: "Blue cave and bay of Kotor ...",
//     lokacija: "Kotor",
//     cijena: "140$ / Person",
//   }
// ]

// jsonRequest = JSON.stringify(this.activitiesData)

// fetchData() {
//   this.http.get<any[]>(this.jsonRequest).subscribe(
//     (data:any) => {
//       this.activitiesData = data;
//           },
//           (error: any) => {
//             console.error("Doslo je do greske:", error)
//           }
//   )
// }




// getActivities() {
//   return this.activitiesData;
// }
}

