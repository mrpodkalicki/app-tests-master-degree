import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatDeleteUpdateElementsTestComponent } from './create-delete-update-elements.component';

describe('CreateDeleteUpdateElementsComponent', () => {
  let component: CreatDeleteUpdateElementsTestComponent;
  let fixture: ComponentFixture<CreatDeleteUpdateElementsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatDeleteUpdateElementsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatDeleteUpdateElementsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
