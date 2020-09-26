import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvdFooterComponent } from './svd-footer.component';

describe('SvdFooterComponent', () => {
  let component: SvdFooterComponent;
  let fixture: ComponentFixture<SvdFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvdFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
