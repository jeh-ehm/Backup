import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmergencyContactsPage } from './emergency-contacts.page';

describe('EmergencyContactsPage', () => {
  let component: EmergencyContactsPage;
  let fixture: ComponentFixture<EmergencyContactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmergencyContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
