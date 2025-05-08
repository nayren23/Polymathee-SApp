import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCommonSpecialtiesComponent } from './most-common-specialties.component';

describe('MostCommonSpecialtiesComponent', () => {
  let component: MostCommonSpecialtiesComponent;
  let fixture: ComponentFixture<MostCommonSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostCommonSpecialtiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostCommonSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
