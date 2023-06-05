import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-activities',
  templateUrl: './single-activities.component.html',
  styleUrls: ['./single-activities.component.css']
})


export class SingleActivitiesComponent  implements OnInit {
constructor(private http: HttpClient,
  private route: ActivatedRoute,
  private router: Router,
  private service: DataService){
  }

  activities: any[] | any;

  ngOnInit(): void {
     this.route.queryParams
      .subscribe(params => {
        console.log(params);
      }
    );
    this.activities = this.service.getData()
  }
}
