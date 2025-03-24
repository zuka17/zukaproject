import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrrenValentinoComponent } from './grren-valentino.component';

describe('GrrenValentinoComponent', () => {
  let component: GrrenValentinoComponent;
  let fixture: ComponentFixture<GrrenValentinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrrenValentinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrrenValentinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
