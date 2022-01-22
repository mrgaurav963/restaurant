import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarentDashComponent } from './restuarent-dash.component';

describe('RestuarentDashComponent', () => {
  let component: RestuarentDashComponent;
  let fixture: ComponentFixture<RestuarentDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarentDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
