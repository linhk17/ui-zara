import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingVerifyCompleteAccountComponent } from './loading-verify-account.component';

describe('LoadingVerifyCompleteAccountComponent', () => {
  let component: LoadingVerifyCompleteAccountComponent;
  let fixture: ComponentFixture<LoadingVerifyCompleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingVerifyCompleteAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingVerifyCompleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
