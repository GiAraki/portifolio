import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portifolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = true;
  ngOnInit(): void {
    setTimeout(() => {this.loading = false},4000)
  }
}
