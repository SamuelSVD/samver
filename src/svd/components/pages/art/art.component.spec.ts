import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtComponent } from './art.component';

describe('ArtComponent', () => {
  let component: ArtComponent;
  let fixture: ComponentFixture<ArtComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
