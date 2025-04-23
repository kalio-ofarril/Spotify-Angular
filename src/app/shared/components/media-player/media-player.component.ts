import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  imports: [NgIf, CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  
  mockCover: TrackModel = {
    cover: 'https://picsum.photos/200',
    album: 'Album',
    name: 'Rolota',
    url: '',
    _id: '1'
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {};

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe());
  }

  ngOnInit(): void {
    const observable1$ = this.multimediaService.myObservable1$
    .subscribe({
      next: ((value: any) => {
        console.log("ok: ", value)
      }), 
      error: ((error: any) => void {}), 
      complete: (() => void {})
    })
  }

}
