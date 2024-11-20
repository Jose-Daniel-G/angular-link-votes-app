import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Link } from '../link.model';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent implements OnInit{

  @HostBinding('attr.class') cssClass = 'row';
  @Input() link!: Link;

  constructor() { }

  ngOnInit() {
    console.log(this.link); // Ensures this runs after @Input is populated
  }
}
