import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpDrywallComponent } from './acp-drywall.component';

describe('AcpDrywallComponent', () => {
  let component: AcpDrywallComponent;
  let fixture: ComponentFixture<AcpDrywallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpDrywallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpDrywallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
