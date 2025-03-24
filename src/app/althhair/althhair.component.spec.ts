import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlthhairComponent } from './althhair.component';

describe('AlthhairComponent', () => {
  let component: AlthhairComponent;
  let fixture: ComponentFixture<AlthhairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlthhairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlthhairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
