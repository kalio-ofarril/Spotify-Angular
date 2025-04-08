import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-play-list-body',
  imports: [NgFor, CommonModule],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{

  tracks: TrackModel[] = [];

  ngOnInit(): void {
    const { data } : any = (dataRaw as any).default;
    this.tracks = data;
  }

}
