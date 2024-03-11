import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableButtonEditComponent } from './table-button-edit.component';

describe('TableButtonEditComponent', () => {
  let component: TableButtonEditComponent;
  let fixture: ComponentFixture<TableButtonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableButtonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
