import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRbtComponent } from './set-rbt.component';

describe('SetRbtComponent', () => {
  let component: SetRbtComponent;
  let fixture: ComponentFixture<SetRbtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetRbtComponent]
    });
    fixture = TestBed.createComponent(SetRbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
