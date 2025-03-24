import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaginationComponent } from './imagination.component';

describe('ImaginationComponent', () => {
  let component: ImaginationComponent;
  let fixture: ComponentFixture<ImaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
