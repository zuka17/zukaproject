import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StryComponent } from './stry.component';

describe('StryComponent', () => {
  let component: StryComponent;
  let fixture: ComponentFixture<StryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
