import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularbrandsComponent } from './popularbrands.component';

describe('PopularbrandsComponent', () => {
  let component: PopularbrandsComponent;
  let fixture: ComponentFixture<PopularbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
