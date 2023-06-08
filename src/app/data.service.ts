import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {


  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
getActivitiesData(): Observable<any> {
   return this.http.get('../../assets/activities-modified.json')
  }
}
