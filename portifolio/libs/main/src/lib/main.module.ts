import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas/canvas.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactComponent } from './contact/contact.component';
import {NgParticlesModule} from "ng-particles";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, NgParticlesModule, FontAwesomeModule],
  declarations: [
    CanvasComponent,
    AboutComponent,
    CompaniesComponent,
    ContactComponent,
  ],
  exports: [CanvasComponent, AboutComponent, CompaniesComponent, ContactComponent],
})
export class MainModule {}
