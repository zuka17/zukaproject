import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongerwithyouintenslyComponent } from './strongerwithyouintensly.component';

describe('StrongerwithyouintenslyComponent', () => {
  let component: StrongerwithyouintenslyComponent;
  let fixture: ComponentFixture<StrongerwithyouintenslyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrongerwithyouintenslyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrongerwithyouintenslyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
