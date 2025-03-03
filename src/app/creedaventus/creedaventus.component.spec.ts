import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreedaventusComponent } from './creedaventus.component';

describe('CreedaventusComponent', () => {
  let component: CreedaventusComponent;
  let fixture: ComponentFixture<CreedaventusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreedaventusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreedaventusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
