import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsContainerComponent } from './elements-container.component';

describe('ElementsContainerComponent', () => {
  let component: ElementsContainerComponent;
  let fixture: ComponentFixture<ElementsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
