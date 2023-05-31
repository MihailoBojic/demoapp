import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderChange } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent {
    selected: Date| undefined;
    selectedTime=7;
    startValue=7;
    endValue=18;

    constructor(private router: Router){}

onBackToExplore(){
  this.router.navigate(['/explore'])
}

  }


