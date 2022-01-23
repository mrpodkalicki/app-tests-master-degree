import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHundredThousandElementsPageComponent } from './one-hundred-thousand-elements-page.component';

describe('OneHundredThousandElementsPageComponent', () => {
  let component: OneHundredThousandElementsPageComponent;
  let fixture: ComponentFixture<OneHundredThousandElementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneHundredThousandElementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHundredThousandElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
