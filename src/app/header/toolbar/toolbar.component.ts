import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  header = {
    title: 'Kontas',
    left: 'menu',
    right: 'more_vert'
  }
  constructor() { }

  ngOnInit(): void {
  }
}
