import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyButtonComponent } from './handy-button.component';

describe('HandyButtonComponent', () => {
  let component: HandyButtonComponent;
  let fixture: ComponentFixture<HandyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
