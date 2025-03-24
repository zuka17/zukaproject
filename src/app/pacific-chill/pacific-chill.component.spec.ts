import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificChillComponent } from './pacific-chill.component';

describe('PacificChillComponent', () => {
  let component: PacificChillComponent;
  let fixture: ComponentFixture<PacificChillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacificChillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacificChillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
