import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/%C3%81ngel_Di_Mar%C3%ADa_2017.jpg',
    album: 'zz',
    name: 'nacho',
    url: 'http://localhost',
    _id: 1
  };
  constructor() {}

  ngOnInit(): void {}
}
