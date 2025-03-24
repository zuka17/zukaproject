import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsoluComponent } from './obsolu.component';

describe('ObsoluComponent', () => {
  let component: ObsoluComponent;
  let fixture: ComponentFixture<ObsoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsoluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
