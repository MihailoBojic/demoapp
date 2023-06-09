import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-featured-activities',
  templateUrl: './featured-activities.component.html',
  styleUrls: ['./featured-activities.component.css']
})
export class FeaturedActivitiesComponent implements OnInit{

  myForm: FormGroup | any;

  constructor(private http: HttpClient, private renderer: Renderer2, private elementRef: ElementRef, private router: Router,private formBuilder: FormBuilder){}
  onSortOptionSelected(option: string) {
    console.log('Selected option:', option);
    // Dodajte svoju logiku za odabir opcije
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
      id:1,
    slika: "../../assets/Thumbnailparagl.png",
    tip: "Adventure",
    ocjena: 4.5,
    opis: "Budva paragliding experie...",
    lokacija: "Budva",
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
          isDropdownOpen = false;

          toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
          }
          @HostListener('document:click', ['$event'])
          onDocumentClick(event: MouseEvent) {
              const targetElement = event.target as HTMLElement;
                  if (!this.elementRef.nativeElement.contains(targetElement)) {
                     this.isDropdownOpen = false;
    }

}
   onGoToFilter(){
      this.router.navigate(['/filter']);
   }
   ngOnInit() {
    this.myForm = this.formBuilder.group({
      selectedActivity: this.formBuilder.group({
        activity: [''] // Inicijalna vrijednost
      })
    });
   }
}
//   popularData=[{
//     slika: "assets/popular1.png",
//     broj: 10,
//     rate: 4.5,
//     place:"Durmitor"
//   },
//   {
//   slika: "assets/popular2.png",
//   broj: 22,
//   rate: 4.5,
//   place:"Perast"
//   },
//   {
//   slika: "assets/popular3.png",
//   broj: 18,
//   rate: 4.5,
//   place:"Velika plaza"
//   },
//   {
//     slika: "assets/popular4.png",
//     broj: 25,
//     rate: 4.5,
//     place:"Sveti Stefan"
//   }
// ]

// jsonString: string = JSON.stringify(this.popularData);
// data:any;

// ngOnInit() {
//   this.http.get<any>(this.jsonString).subscribe(data => {
//     this.data = data;
//   });
// }
// }




