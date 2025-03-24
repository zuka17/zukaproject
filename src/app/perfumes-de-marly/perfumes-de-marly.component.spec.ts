import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesDeMarlyComponent } from './perfumes-de-marly.component';

describe('PerfumesDeMarlyComponent', () => {
  let component: PerfumesDeMarlyComponent;
  let fixture: ComponentFixture<PerfumesDeMarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumesDeMarlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfumesDeMarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
