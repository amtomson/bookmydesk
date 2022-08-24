import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desk-select',
  templateUrl: './desk-select.component.html',
  styleUrls: ['./desk-select.component.scss'],
})
export class DeskSelectComponent {
  constructor(private router: Router) {}

  goToBookDeskSuccess() {
    this.router.navigate(['book-desk-success']);
  }
}
