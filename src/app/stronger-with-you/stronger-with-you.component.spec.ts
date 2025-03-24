import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongerWithYouComponent } from './stronger-with-you.component';

describe('StrongerWithYouComponent', () => {
  let component: StrongerWithYouComponent;
  let fixture: ComponentFixture<StrongerWithYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrongerWithYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrongerWithYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
