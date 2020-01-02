import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpCarpentryComponent } from './acp-carpentry.component';

describe('CarpentryComponent', () => {
  let component: AcpCarpentryComponent;
  let fixture: ComponentFixture<AcpCarpentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpCarpentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpCarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
