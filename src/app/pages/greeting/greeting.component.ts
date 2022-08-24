import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {

  constructor(private router: Router) { }

  goToBookDesk() {
    this.router.navigate(['book-desk']);
  }
}
