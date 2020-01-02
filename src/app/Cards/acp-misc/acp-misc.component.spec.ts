import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpMiscComponent } from './acp-misc.component';

describe('AcpMiscComponent', () => {
  let component: AcpMiscComponent;
  let fixture: ComponentFixture<AcpMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
