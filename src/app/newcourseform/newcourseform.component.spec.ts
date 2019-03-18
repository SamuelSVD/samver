import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourseformComponent } from './newcourseform.component';

describe('NewcourseformComponent', () => {
  let component: NewcourseformComponent;
  let fixture: ComponentFixture<NewcourseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
