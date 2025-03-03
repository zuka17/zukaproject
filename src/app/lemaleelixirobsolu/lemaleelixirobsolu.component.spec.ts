import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemaleelixirobsoluComponent } from './lemaleelixirobsolu.component';

describe('LemaleelixirobsoluComponent', () => {
  let component: LemaleelixirobsoluComponent;
  let fixture: ComponentFixture<LemaleelixirobsoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LemaleelixirobsoluComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LemaleelixirobsoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
