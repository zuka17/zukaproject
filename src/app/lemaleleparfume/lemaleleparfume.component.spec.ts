import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemaleleparfumeComponent } from './lemaleleparfume.component';

describe('LemaleleparfumeComponent', () => {
  let component: LemaleleparfumeComponent;
  let fixture: ComponentFixture<LemaleleparfumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LemaleleparfumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LemaleleparfumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
