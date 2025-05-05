import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprentisGraphComponent } from './apprentis-graph.component';

describe('ApprentisGraphComponent', () => {
  let component: ApprentisGraphComponent;
  let fixture: ComponentFixture<ApprentisGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprentisGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprentisGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
