import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishCategoryComponent } from './english-category.component';

describe('EnglishCategoryComponent', () => {
  let component: EnglishCategoryComponent;
  let fixture: ComponentFixture<EnglishCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
