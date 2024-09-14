import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/%C3%81ngel_Di_Mar%C3%ADa_2017.jpg',
    album: 'zz',
    name: 'nacho',
  };
  constructor() {}

  ngOnInit(): void {}
}
