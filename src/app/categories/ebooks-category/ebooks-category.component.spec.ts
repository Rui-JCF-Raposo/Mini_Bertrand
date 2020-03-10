import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksCategoryComponent } from './ebooks-category.component';

describe('EbooksCategoryComponent', () => {
  let component: EbooksCategoryComponent;
  let fixture: ComponentFixture<EbooksCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
