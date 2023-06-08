import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-activities',
  templateUrl: './single-activities.component.html',
  styleUrls: ['./single-activities.component.css'],
})
export class SingleActivitiesComponent implements OnInit {
  activities: any[] | any;
  activity: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {

      this.activities = this.service.getData();
      this.activity = this.activities.filter((obj: { id: any }) => {
        return obj.id == params['id'];
      });

      if (this.activity.length > 0) {
        this.activity = this.activity[0];
      }
    });
  }
  onBackToPrevious(){
    this.router.navigate(['/explore']);
  }
}
