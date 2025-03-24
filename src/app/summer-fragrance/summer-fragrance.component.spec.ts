import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerFragranceComponent } from './summer-fragrance.component';

describe('SummerFragranceComponent', () => {
  let component: SummerFragranceComponent;
  let fixture: ComponentFixture<SummerFragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummerFragranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
