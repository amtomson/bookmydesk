import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeskSuccessComponent } from './book-desk-success.component';

describe('BookDeskSuccessComponent', () => {
  let component: BookDeskSuccessComponent;
  let fixture: ComponentFixture<BookDeskSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDeskSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDeskSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
