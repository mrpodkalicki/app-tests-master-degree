import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPageTimeTestComponent } from './initial-page-time-test.component';

describe('CreateElementsOnInitComponent', () => {
  let component: InitialPageTimeTestComponent;
  let fixture: ComponentFixture<InitialPageTimeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPageTimeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPageTimeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
