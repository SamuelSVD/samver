import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickdbaccessComponent } from './quickdbaccess.component';

describe('QuickdbaccessComponent', () => {
  let component: QuickdbaccessComponent;
  let fixture: ComponentFixture<QuickdbaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickdbaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickdbaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
