import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  imports: [NgIf, CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit{
  

  mockCover: any = {
    cover: 'https://picsum.photos/200',
    album: 'Album',
    name: 'Rolota'
  }

  ngOnInit(): void {
    
  }
}
