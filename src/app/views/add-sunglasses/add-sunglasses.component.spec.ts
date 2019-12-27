import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSunglassesComponent } from './add-sunglasses.component';

describe('AddSunglassesComponent', () => {
  let component: AddSunglassesComponent;
  let fixture: ComponentFixture<AddSunglassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSunglassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSunglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
