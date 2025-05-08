import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitesHandicapComponent } from './specialites-handicap.component';

describe('SpecialitesHandicapComponent', () => {
  let component: SpecialitesHandicapComponent;
  let fixture: ComponentFixture<SpecialitesHandicapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialitesHandicapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialitesHandicapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
