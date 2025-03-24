import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenlyComponent } from './greenly.component';

describe('GreenlyComponent', () => {
  let component: GreenlyComponent;
  let fixture: ComponentFixture<GreenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
