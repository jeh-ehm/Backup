import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLandingPage } from './home-landing.page';

describe('HomeLandingPage', () => {
  let component: HomeLandingPage;
  let fixture: ComponentFixture<HomeLandingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
