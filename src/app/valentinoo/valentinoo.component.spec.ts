import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinooComponent } from './valentinoo.component';

describe('ValentinooComponent', () => {
  let component: ValentinooComponent;
  let fixture: ComponentFixture<ValentinooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentinooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
