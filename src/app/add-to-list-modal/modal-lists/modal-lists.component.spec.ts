import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListsComponent } from './modal-lists.component';

describe('ModalListsComponent', () => {
  let component: ModalListsComponent;
  let fixture: ComponentFixture<ModalListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
