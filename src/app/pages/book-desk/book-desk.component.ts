import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-desk',
  templateUrl: './book-desk.component.html',
  styleUrls: ['./book-desk.component.scss']
})
export class BookDeskComponent {

  constructor(private router: Router) { }

  goToDeskSelect() {
    this.router.navigate(['desk-select']);
  }
}
