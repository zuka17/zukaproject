import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternoonSwimComponent } from './afternoon-swim.component';

describe('AfternoonSwimComponent', () => {
  let component: AfternoonSwimComponent;
  let fixture: ComponentFixture<AfternoonSwimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfternoonSwimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfternoonSwimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
