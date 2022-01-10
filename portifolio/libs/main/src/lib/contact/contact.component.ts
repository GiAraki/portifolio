import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'portifolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  show = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 2400) {
      this.show = true
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  scrollUp(){
   window.scrollTo(0, 0);
  }

}
