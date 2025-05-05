import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprentisComponent } from './apprentis.component';

describe('ApprentisComponent', () => {
  let component: ApprentisComponent;
  let fixture: ComponentFixture<ApprentisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprentisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprentisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
