import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { BookDeskComponent } from './pages/book-desk/book-desk.component';
import { DeskSelectComponent } from './pages/desk-select/desk-select.component';
import { BookDeskSuccessComponent } from './pages/book-desk-success/book-desk-success.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, GreetingComponent, BookDeskComponent, DeskSelectComponent, BookDeskSuccessComponent, OtherServicesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
