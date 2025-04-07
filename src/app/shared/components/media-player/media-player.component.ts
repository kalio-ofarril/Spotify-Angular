import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  imports: [NgIf, CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit{
  
  mockCover: TrackModel = {
    cover: 'https://picsum.photos/200',
    album: 'Album',
    name: 'Rolota',
    url: '',
    _id: '1'
  }

  ngOnInit(): void {
    
  }

}
