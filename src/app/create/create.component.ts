import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderChange } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

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



  }


