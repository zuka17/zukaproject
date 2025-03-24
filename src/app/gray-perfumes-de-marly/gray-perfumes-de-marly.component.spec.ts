import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayPerfumesDeMarlyComponent } from './gray-perfumes-de-marly.component';

describe('GrayPerfumesDeMarlyComponent', () => {
  let component: GrayPerfumesDeMarlyComponent;
  let fixture: ComponentFixture<GrayPerfumesDeMarlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayPerfumesDeMarlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrayPerfumesDeMarlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
