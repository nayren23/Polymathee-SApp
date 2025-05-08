import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSchoolsComponent } from './top-schools.component';

describe('TopSchoolsComponent', () => {
  let component: TopSchoolsComponent;
  let fixture: ComponentFixture<TopSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSchoolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
