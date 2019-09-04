import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvdContentComponent } from './svd-content.component';

describe('SvdContentComponent', () => {
  let component: SvdContentComponent;
  let fixture: ComponentFixture<SvdContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvdContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
