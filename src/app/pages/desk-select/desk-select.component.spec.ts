import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskSelectComponent } from './desk-select.component';

describe('DeskSelectComponent', () => {
  let component: DeskSelectComponent;
  let fixture: ComponentFixture<DeskSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
