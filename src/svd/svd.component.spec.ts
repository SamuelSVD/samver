import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SvdComponent } from './svd.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SvdComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SvdComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'samver'`, () => {
    const fixture = TestBed.createComponent(SvdComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('samver');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SvdComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to samver!');
  });
});
