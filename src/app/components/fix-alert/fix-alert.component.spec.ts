import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixAlertComponent } from './fix-alert.component';

describe('FixAlertComponent', () => {
  let component: FixAlertComponent;
  let fixture: ComponentFixture<FixAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
