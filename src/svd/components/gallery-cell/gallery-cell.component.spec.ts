import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryCellComponent } from './gallery-cell.component';

describe('GalleryCellComponent', () => {
  let component: GalleryCellComponent;
  let fixture: ComponentFixture<GalleryCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
