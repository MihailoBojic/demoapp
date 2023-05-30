import { Component } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  br = 0
  childrenBr = 0;
  uvecaj() {
    this.br++
    return this.br;
  }

  umanji() {
    this.br--
    return this.br
  }

  childrenPlus(){
    this.childrenBr++
    return this.childrenBr;
  }
  childrenMinus() {
    this.childrenBr--;
    return this.childrenBr
  }
}
