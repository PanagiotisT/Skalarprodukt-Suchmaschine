import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KopfbereichComponent } from './kopfbereich.component';

describe('KopfbereichComponent', () => {
  let component: KopfbereichComponent;
  let fixture: ComponentFixture<KopfbereichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KopfbereichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KopfbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
