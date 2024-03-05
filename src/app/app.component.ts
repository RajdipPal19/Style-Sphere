import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Style Sphere';
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.title = 'Style Sphere';
  }
}
