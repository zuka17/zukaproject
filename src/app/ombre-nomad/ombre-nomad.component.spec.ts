import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbreNomadComponent } from './ombre-nomad.component';

describe('OmbreNomadComponent', () => {
  let component: OmbreNomadComponent;
  let fixture: ComponentFixture<OmbreNomadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmbreNomadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmbreNomadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
