import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileDragComponent } from './upload-file-drag.component';

describe('UploadFileDragComponent', () => {
  let component: UploadFileDragComponent;
  let fixture: ComponentFixture<UploadFileDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileDragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
