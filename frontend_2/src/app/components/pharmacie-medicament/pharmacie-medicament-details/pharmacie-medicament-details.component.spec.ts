import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieMedicamentDetailsComponent } from './pharmacie-medicament-details.component';

describe('PharmacieMedicamentDetailsComponent', () => {
  let component: PharmacieMedicamentDetailsComponent;
  let fixture: ComponentFixture<PharmacieMedicamentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieMedicamentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacieMedicamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
