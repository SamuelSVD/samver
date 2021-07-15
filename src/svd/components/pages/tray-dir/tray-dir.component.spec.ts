import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrayDirComponent } from './tray-dir.component';

describe('TrayDirComponent', () => {
  let component: TrayDirComponent;
  let fixture: ComponentFixture<TrayDirComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
