import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from '@portifolio/main';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
