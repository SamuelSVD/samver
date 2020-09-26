import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvdSocialMediaHeaderComponent } from './svd-social-media-header.component';

describe('SvdSocialMediaHeaderComponent', () => {
  let component: SvdSocialMediaHeaderComponent;
  let fixture: ComponentFixture<SvdSocialMediaHeaderComponent>;

  beforeEach(async(() => {
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
