import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userCompomnent } from './user.component';

describe('User', () => {
  let component: userCompomnent;
  let fixture: ComponentFixture<userCompomnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userCompomnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userCompomnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
