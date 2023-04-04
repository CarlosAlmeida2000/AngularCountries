import { TestBed } from '@angular/core/testing';

import { CheckedSessionGuard } from './checked-session.guard';

describe('CheckedSessionGuard', () => {
  let guard: CheckedSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckedSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
