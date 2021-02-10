import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWrapperComponent } from './photo-wrapper.component';

describe('PhotoWrapperComponent', () => {
  let component: PhotoWrapperComponent;
  let fixture: ComponentFixture<PhotoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
