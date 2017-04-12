import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardMemberComponent } from './edit-board-member.component';

describe('EditBoardMemberComponent', () => {
  let component: EditBoardMemberComponent;
  let fixture: ComponentFixture<EditBoardMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoardMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
