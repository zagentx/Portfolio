import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleIcon = false;

  constructor() {}

  ngOnInit(): void {}

  public openInput() {
    this.toggleIcon = true;
  }
}
