import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureeFormationComponent } from './duree-formation.component';

describe('DureeFormationComponent', () => {
  let component: DureeFormationComponent;
  let fixture: ComponentFixture<DureeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DureeFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DureeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
