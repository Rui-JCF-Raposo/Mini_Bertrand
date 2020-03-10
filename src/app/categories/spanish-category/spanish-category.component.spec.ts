import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishCategoryComponent } from './spanish-category.component';

describe('SpanishCategoryComponent', () => {
  let component: SpanishCategoryComponent;
  let fixture: ComponentFixture<SpanishCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
