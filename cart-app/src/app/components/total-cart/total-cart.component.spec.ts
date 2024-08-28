import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCartComponent } from './total-cart.component';

describe('TotalCartComponent', () => {
  let component: TotalCartComponent;
  let fixture: ComponentFixture<TotalCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
