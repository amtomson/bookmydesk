import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-desk-success',
  templateUrl: './book-desk-success.component.html',
  styleUrls: ['./book-desk-success.component.scss']
})
export class BookDeskSuccessComponent  {

  constructor(private router: Router) { }

  goToOtherServices() {
    this.router.navigate(['other-services']);
  }
}
