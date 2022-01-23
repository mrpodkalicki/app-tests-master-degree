import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHundredThousandElementsComponent } from './five-hundred-thousand-elements.component';

describe('FiveHundredThousandElementsComponent', () => {
  let component: FiveHundredThousandElementsComponent;
  let fixture: ComponentFixture<FiveHundredThousandElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveHundredThousandElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveHundredThousandElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
