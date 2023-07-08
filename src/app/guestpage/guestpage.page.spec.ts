import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestpagePage } from './guestpage.page';

describe('GuestpagePage', () => {
  let component: GuestpagePage;
  let fixture: ComponentFixture<GuestpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuestpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
