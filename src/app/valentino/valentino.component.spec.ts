import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentinoComponent } from './valentino.component';

describe('ValentinoComponent', () => {
  let component: ValentinoComponent;
  let fixture: ComponentFixture<ValentinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
