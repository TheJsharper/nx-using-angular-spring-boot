import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterTableViewComponent } from './footer-table-view.component';

describe('FooterTableViewComponent', () => {
  let component: FooterTableViewComponent;
  let fixture: ComponentFixture<FooterTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTableViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
