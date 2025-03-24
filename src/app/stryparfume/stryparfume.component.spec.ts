import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StryparfumeComponent } from './stryparfume.component';

describe('StryparfumeComponent', () => {
  let component: StryparfumeComponent;
  let fixture: ComponentFixture<StryparfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StryparfumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StryparfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
