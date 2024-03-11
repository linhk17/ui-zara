import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodeInputComponent } from './country-code-input.component';

describe('CountryCodeInputComponent', () => {
  let component: CountryCodeInputComponent;
  let fixture: ComponentFixture<CountryCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
