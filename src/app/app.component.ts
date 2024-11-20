import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { Link } from './link.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-links-votes-app';
  // link = 'http://angular';
  // title?: string;
  // link?: string;

  links: Link[];

  constructor() {
    this.links = [
      new Link('Angular', 'http://angular.io', 100),
      new Link('React', 'http://reactjs.org',30),
      new Link('Vue.js', 'http://vuejs.org',40),
    ];
    console.log(this.links);
  }
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    title.value ='';
    link.value = '';
    return false;
  }
}
