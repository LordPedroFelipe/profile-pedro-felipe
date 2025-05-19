import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCvComponent } from './download-cv.component';

describe('DownloadCvComponent', () => {
  let component: DownloadCvComponent;
  let fixture: ComponentFixture<DownloadCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadCvComponent]
    });
    fixture = TestBed.createComponent(DownloadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
