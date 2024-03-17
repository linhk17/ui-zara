import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductPlaceholdersComponent } from './card-product-placeholders.component';

describe('CardProductPlaceholdersComponent', () => {
  let component: CardProductPlaceholdersComponent;
  let fixture: ComponentFixture<CardProductPlaceholdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductPlaceholdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductPlaceholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
