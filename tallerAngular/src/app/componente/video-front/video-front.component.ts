import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-front',
  templateUrl: './video-front.component.html',
  styleUrls: ['./video-front.component.css']
})
export class VideoFrontComponent implements OnInit {
    constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }

}

