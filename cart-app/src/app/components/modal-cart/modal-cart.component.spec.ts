import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartComponent } from './modal-cart.component';

describe('ModalCartComponent', () => {
  let component: ModalCartComponent;
  let fixture: ComponentFixture<ModalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
