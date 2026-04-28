import { TestBed } from '@angular/core/testing';

import { AuthUser } from './authUser';

describe('UserRegisterApi', () => {
  let service: AuthUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
