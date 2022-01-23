import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ShowElements} from "./show-elements";


describe('CreateElementsOnInitComponent', () => {
  let component: ShowElements;
  let fixture: ComponentFixture<ShowElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowElements ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
