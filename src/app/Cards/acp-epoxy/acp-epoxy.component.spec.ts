import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpEpoxyComponent } from './acp-epoxy.component';

describe('AcpEpoxyComponent', () => {
  let component: AcpEpoxyComponent;
  let fixture: ComponentFixture<AcpEpoxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpEpoxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpEpoxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
