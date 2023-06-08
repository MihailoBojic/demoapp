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
  activitiesData = [];
  activity: Activity[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) {}

  ngOnInit(): void {
    console.log("aaaa")
    this.route.queryParams.subscribe((params) => {
       this.service.getActivitiesData().subscribe((res => {
        console.log(res)
        console.log(params)
        this.activitiesData = res.data.activities
        console.log(this.activitiesData)
        this.activity = this.activitiesData.filter((obj:any) => {
          return obj.id == params['id']
        })
        console.log(this.activity)

      }))
  });
  }
  onBackToPrevious(){
    this.router.navigate(['/explore']);
  }
}
interface Activity {
  id: number;
  name: string;
  description: string;
  category: string;
  city: string;
  address: string;
  pricing: [
    {
      type: string;
      price: number;
      discount: any[];
    }
  ];
  ranking: number;
}

