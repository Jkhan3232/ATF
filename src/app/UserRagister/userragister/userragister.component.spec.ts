import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserragisterComponent } from './userragister.component';

describe('UserragisterComponent', () => {
  let component: UserragisterComponent;
  let fixture: ComponentFixture<UserragisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserragisterComponent]
    });
    fixture = TestBed.createComponent(UserragisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
