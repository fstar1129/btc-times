import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamItemComponent } from './about-team-item.component';

describe('AboutTeamItemComponent', () => {
  let component: AboutTeamItemComponent;
  let fixture: ComponentFixture<AboutTeamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTeamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
