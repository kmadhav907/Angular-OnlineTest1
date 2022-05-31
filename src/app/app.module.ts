import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    NavbarComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
