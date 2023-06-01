import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActivitiesComponent } from './single-activities.component';

describe('SingleActivitiesComponent', () => {
  let component: SingleActivitiesComponent;
  let fixture: ComponentFixture<SingleActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleActivitiesComponent]
    });
    fixture = TestBed.createComponent(SingleActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
