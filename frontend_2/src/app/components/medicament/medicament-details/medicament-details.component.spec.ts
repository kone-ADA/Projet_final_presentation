import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentDetailsComponent } from './medicament-details.component';

describe('MedicamentDetailsComponent', () => {
  let component: MedicamentDetailsComponent;
  let fixture: ComponentFixture<MedicamentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
