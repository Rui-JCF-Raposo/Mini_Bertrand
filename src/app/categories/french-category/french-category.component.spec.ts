import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchCategoryComponent } from './french-category.component';

describe('FrenchCategoryComponent', () => {
  let component: FrenchCategoryComponent;
  let fixture: ComponentFixture<FrenchCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
