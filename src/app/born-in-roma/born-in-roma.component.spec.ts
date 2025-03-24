import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BornInRomaComponent } from './born-in-roma.component';

describe('BornInRomaComponent', () => {
  let component: BornInRomaComponent;
  let fixture: ComponentFixture<BornInRomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BornInRomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BornInRomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
