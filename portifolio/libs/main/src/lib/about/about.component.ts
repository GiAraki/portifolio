import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'portifolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  show = false;
  showAbout = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 500) {
      this.show = true
    }
    if (window.pageYOffset > 900) {
      this.showAbout = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
