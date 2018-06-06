import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartProfileComponent } from './start-profile.component';

describe('StartProfileComponent', () => {
  let component: StartProfileComponent;
  let fixture: ComponentFixture<StartProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
