import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgComponent } from './jpg.component';

describe('JpgComponent', () => {
  let component: JpgComponent;
  let fixture: ComponentFixture<JpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
