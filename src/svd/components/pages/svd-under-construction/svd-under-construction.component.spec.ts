import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvdUnderConstructionComponent } from './svd-under-construction.component';

describe('SvdUnderConstructionComponent', () => {
  let component: SvdUnderConstructionComponent;
  let fixture: ComponentFixture<SvdUnderConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvdUnderConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvdUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
