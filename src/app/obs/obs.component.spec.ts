import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsComponent } from './obs.component';

describe('ObsComponent', () => {
  let component: ObsComponent;
  let fixture: ComponentFixture<ObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
