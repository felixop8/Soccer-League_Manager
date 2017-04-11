import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardMemberComponent } from './delete-board-member.component';

describe('DeleteBoardMemberComponent', () => {
  let component: DeleteBoardMemberComponent;
  let fixture: ComponentFixture<DeleteBoardMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBoardMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
