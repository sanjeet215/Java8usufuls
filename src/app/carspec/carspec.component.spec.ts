import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarspecComponent } from './carspec.component';

describe('CarspecComponent', () => {
  let component: CarspecComponent;
  let fixture: ComponentFixture<CarspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
