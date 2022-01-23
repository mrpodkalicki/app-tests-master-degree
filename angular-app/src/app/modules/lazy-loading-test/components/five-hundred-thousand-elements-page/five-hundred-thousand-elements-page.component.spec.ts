import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHundredThousandElementsPageComponent } from './five-hundred-thousand-elements-page.component';

describe('FiveHundredThousandElementsPageComponent', () => {
  let component: FiveHundredThousandElementsPageComponent;
  let fixture: ComponentFixture<FiveHundredThousandElementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveHundredThousandElementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveHundredThousandElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
