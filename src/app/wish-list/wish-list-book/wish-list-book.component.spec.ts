import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListBookComponent } from './wish-list-book.component';

describe('WishListBookComponent', () => {
  let component: WishListBookComponent;
  let fixture: ComponentFixture<WishListBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
