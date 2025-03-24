import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaytonComponent } from './layton.component';

describe('LaytonComponent', () => {
  let component: LaytonComponent;
  let fixture: ComponentFixture<LaytonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaytonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaytonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
