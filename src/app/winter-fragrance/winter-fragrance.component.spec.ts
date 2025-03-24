import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterFragranceComponent } from './winter-fragrance.component';

describe('WinterFragranceComponent', () => {
  let component: WinterFragranceComponent;
  let fixture: ComponentFixture<WinterFragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinterFragranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
