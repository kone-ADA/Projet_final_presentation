import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacieMedicamentComponent } from './add-pharmacie-medicament.component';

describe('AddPharmacieMedicamentComponent', () => {
  let component: AddPharmacieMedicamentComponent;
  let fixture: ComponentFixture<AddPharmacieMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPharmacieMedicamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPharmacieMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
