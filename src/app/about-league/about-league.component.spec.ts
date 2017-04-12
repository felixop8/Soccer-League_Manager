import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLeagueComponent } from './about-league.component';

describe('AboutLeagueComponent', () => {
  let component: AboutLeagueComponent;
  let fixture: ComponentFixture<AboutLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
