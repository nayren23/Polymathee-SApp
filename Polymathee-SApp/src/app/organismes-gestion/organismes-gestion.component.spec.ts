import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismesGestionComponent } from './organismes-gestion.component';

describe('OrganismesGestionComponent', () => {
  let component: OrganismesGestionComponent;
  let fixture: ComponentFixture<OrganismesGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismesGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismesGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
