import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardMembersComponent } from './board-members.component';

describe('BoardMembersComponent', () => {
  let component: BoardMembersComponent;
  let fixture: ComponentFixture<BoardMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
