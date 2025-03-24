import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsolutlyComponent } from './obsolutly.component';

describe('ObsolutlyComponent', () => {
  let component: ObsolutlyComponent;
  let fixture: ComponentFixture<ObsolutlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsolutlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsolutlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
