import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'portifolio-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  show = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 1800) {
      this.show = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }


}
