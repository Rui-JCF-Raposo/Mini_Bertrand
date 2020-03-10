import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBooksCategoryComponent } from './text-books-category.component';

describe('TextBooksCategoryComponent', () => {
  let component: TextBooksCategoryComponent;
  let fixture: ComponentFixture<TextBooksCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBooksCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
