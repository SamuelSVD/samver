import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvdHeaderComponent } from './svd-header.component';

describe('SvdHeaderComponent', () => {
  let component: SvdHeaderComponent;
  let fixture: ComponentFixture<SvdHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvdHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
