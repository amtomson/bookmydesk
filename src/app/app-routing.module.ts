import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDeskSuccessComponent } from './pages/book-desk-success/book-desk-success.component';
import { BookDeskComponent } from './pages/book-desk/book-desk.component';
import { DeskSelectComponent } from './pages/desk-select/desk-select.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { LoginComponent } from './pages/login/login.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'greeting',
    component: GreetingComponent,
  },
  {
    path: 'book-desk',
    component: BookDeskComponent,
  },
  {
    path: 'desk-select',
    component: DeskSelectComponent,
  },
  {
    path: 'book-desk-success',
    component: BookDeskSuccessComponent,
  },
  {
    path: 'other-services',
    component: OtherServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
