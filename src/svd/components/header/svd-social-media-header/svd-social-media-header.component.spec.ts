import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SvdSocialMediaHeaderComponent } from './svd-social-media-header.component';

describe('SvdSocialMediaHeaderComponent', () => {
  let component: SvdSocialMediaHeaderComponent;
  let fixture: ComponentFixture<SvdSocialMediaHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SvdSocialMediaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvdSocialMediaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
