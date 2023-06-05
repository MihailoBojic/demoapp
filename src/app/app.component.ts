import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private http: HttpClient) {}
  title = 'memoires-project';


  fetchData() {
    this.http.get('https://digitalcontrol.slack.com/files/USP96HCLV/F05AW10MZ45/activities-modified.json').subscribe((data) => {
      console.log(data);
});
}
}
