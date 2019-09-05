import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvdHeaderComponent } from './svd-header.component';

describe('SvdHeaderComponent', () => {
  let component: SvdHeaderComponent;
  let fixture: ComponentFixture<SvdHeaderComponent>;

  beforeEach(async(() => {
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
