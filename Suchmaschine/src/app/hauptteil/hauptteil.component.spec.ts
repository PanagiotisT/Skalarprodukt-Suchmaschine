import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptteilComponent } from './hauptteil.component';

describe('HauptteilComponent', () => {
  let component: HauptteilComponent;
  let fixture: ComponentFixture<HauptteilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HauptteilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HauptteilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
