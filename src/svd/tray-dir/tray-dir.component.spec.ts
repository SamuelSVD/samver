import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayDirComponent } from './tray-dir.component';

describe('TrayDirComponent', () => {
  let component: TrayDirComponent;
  let fixture: ComponentFixture<TrayDirComponent>;

  beforeEach(async(() => {
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
