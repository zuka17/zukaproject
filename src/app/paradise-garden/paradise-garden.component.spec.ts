import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadiseGardenComponent } from './paradise-garden.component';

describe('ParadiseGardenComponent', () => {
  let component: ParadiseGardenComponent;
  let fixture: ComponentFixture<ParadiseGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParadiseGardenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParadiseGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
