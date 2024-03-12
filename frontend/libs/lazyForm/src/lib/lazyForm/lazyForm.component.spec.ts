import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyFormComponent } from './lazyForm.component';

describe('LazyFormComponent', () => {
  let component: LazyFormComponent;
  let fixture: ComponentFixture<LazyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
