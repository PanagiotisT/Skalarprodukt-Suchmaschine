import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeiteComponent } from './seite.component';

describe('SeiteComponent', () => {
  let component: SeiteComponent;
  let fixture: ComponentFixture<SeiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
