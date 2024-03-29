import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailsComponent } from './dialog-details.component';

describe('DialogDetailsComponent', () => {
  let component: DialogDetailsComponent;
  let fixture: ComponentFixture<DialogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
