import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleJeunesComponent } from './ville-jeunes.component';

describe('VilleJeunesComponent', () => {
  let component: VilleJeunesComponent;
  let fixture: ComponentFixture<VilleJeunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilleJeunesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilleJeunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
