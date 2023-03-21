import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieMedicamentListComponent } from './pharmacie-medicament-list.component';

describe('PharmacieMedicamentListComponent', () => {
  let component: PharmacieMedicamentListComponent;
  let fixture: ComponentFixture<PharmacieMedicamentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacieMedicamentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacieMedicamentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
