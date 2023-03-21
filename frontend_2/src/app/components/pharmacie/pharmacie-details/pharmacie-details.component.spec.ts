import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieDetailsComponent } from './pharmacie-details.component';

describe('PharmacieDetailsComponent', () => {
  let component: PharmacieDetailsComponent;
  let fixture: ComponentFixture<PharmacieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
