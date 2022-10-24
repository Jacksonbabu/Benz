import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventedComponent } from './invented.component';

describe('InventedComponent', () => {
  let component: InventedComponent;
  let fixture: ComponentFixture<InventedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
