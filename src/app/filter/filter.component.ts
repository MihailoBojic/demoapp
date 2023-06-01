import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private router: Router){}
  onBackToFeatured(){
    this.router.navigate(['/featured']);
  }
  startValue=300;
  endValue=400;
}
