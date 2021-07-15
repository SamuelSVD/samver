import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NppePrepComponent } from './nppe-prep.component';

describe('NppePrepComponent', () => {
  let component: NppePrepComponent;
  let fixture: ComponentFixture<NppePrepComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NppePrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NppePrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
