import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-popular-places',
  templateUrl: './popular-places.component.html',
  styleUrls: ['./popular-places.component.css']
})

export class PopularPlacesComponent {

  popularData=[{
    slika: "assets/popular1.png",
    broj: 10,
    rate: 4.5,
    place:"Durmitor"
  },
  {
  slika: "assets/popular2.png",
  broj: 22,
  rate: 4.5,
  place:"Perast"
  },
  {
  slika: "assets/popular3.png",
  broj: 18,
  rate: 4.5,
  place:"Velika plaza"
  },
  {
    slika: "assets/popular4.png",
    broj: 25,
    rate: 4.5,
    place:"Sveti Stefan"
  }
]

jsonString: string = JSON.stringify(this.popularData);
data:any;


constructor(private http: HttpClient) { }


ngOnInit() {
  this.http.get(this.jsonString).subscribe(data => {
    this.data = data;
  });
}
}
