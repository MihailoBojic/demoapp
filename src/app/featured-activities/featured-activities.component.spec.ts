import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedActivitiesComponent } from './featured-activities.component';

describe('FeaturedActivitiesComponent', () => {
  let component: FeaturedActivitiesComponent;
  let fixture: ComponentFixture<FeaturedActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedActivitiesComponent]
    });
    fixture = TestBed.createComponent(FeaturedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
