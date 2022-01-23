import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingTestComponent } from './lazy-loading-test.component';

describe('LeazyLodingTestComponent', () => {
  let component: LazyLoadingTestComponent;
  let fixture: ComponentFixture<LazyLoadingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
