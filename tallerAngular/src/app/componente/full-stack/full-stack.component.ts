import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-stack',
  templateUrl: './full-stack.component.html',
  styleUrls: ['./full-stack.component.css']
})
export class FullStackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }

}
