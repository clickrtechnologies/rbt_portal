import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbtDialogComponent } from './rbt-dialog.component';

describe('RbtDialogComponent', () => {
  let component: RbtDialogComponent;
  let fixture: ComponentFixture<RbtDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RbtDialogComponent]
    });
    fixture = TestBed.createComponent(RbtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
