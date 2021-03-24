import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIXComponent } from './pix.component';

describe('PIXComponent', () => {
  let component: PIXComponent;
  let fixture: ComponentFixture<PIXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PIXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PIXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
