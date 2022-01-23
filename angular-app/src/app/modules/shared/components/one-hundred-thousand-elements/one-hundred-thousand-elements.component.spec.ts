import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHundredThousandElementsComponent } from './one-hundred-thousand-elements.component';

describe('OneHundredThousandElementsComponent', () => {
  let component: OneHundredThousandElementsComponent;
  let fixture: ComponentFixture<OneHundredThousandElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneHundredThousandElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHundredThousandElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
