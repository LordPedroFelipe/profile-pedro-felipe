import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselImagensComponent } from './carrossel-imagens.component';

describe('CarrosselImagensComponent', () => {
  let component: CarrosselImagensComponent;
  let fixture: ComponentFixture<CarrosselImagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosselImagensComponent]
    });
    fixture = TestBed.createComponent(CarrosselImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
