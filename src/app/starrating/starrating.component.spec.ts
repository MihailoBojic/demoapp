import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarratingComponent } from './starrating.component';

describe('StarratingComponent', () => {
  let component: StarratingComponent;
  let fixture: ComponentFixture<StarratingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarratingComponent]
    });
    fixture = TestBed.createComponent(StarratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
