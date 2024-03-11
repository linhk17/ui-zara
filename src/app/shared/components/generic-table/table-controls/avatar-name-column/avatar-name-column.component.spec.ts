import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarNameColumnComponent } from './avatar-name-column.component';

describe('AvatarNameColumnComponent', () => {
  let component: AvatarNameColumnComponent;
  let fixture: ComponentFixture<AvatarNameColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarNameColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarNameColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
