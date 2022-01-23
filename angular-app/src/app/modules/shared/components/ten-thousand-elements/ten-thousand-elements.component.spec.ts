import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenThousandElementsComponent } from './ten-thousand-elements.component';

describe('TenThousandElementsComponent', () => {
  let component: TenThousandElementsComponent;
  let fixture: ComponentFixture<TenThousandElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenThousandElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenThousandElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
