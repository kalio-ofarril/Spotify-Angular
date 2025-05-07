import { CommonModule, NgIf } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  
  listObservers$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {};

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe());
  }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status);

    this.listObservers$ = [observer1$];
  }

  handlePosition(evt: MouseEvent){
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const {clientX} = evt;
    const {x, width} = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }

}
