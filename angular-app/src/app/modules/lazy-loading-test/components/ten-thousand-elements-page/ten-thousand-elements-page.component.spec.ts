import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenThousandElementsPageComponent } from './ten-thousand-elements.component';

describe('TenThousandElementsComponent', () => {
  let component: TenThousandElementsPageComponent;
  let fixture: ComponentFixture<TenThousandElementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenThousandElementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenThousandElementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
