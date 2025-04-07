import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-card-player',
  imports: [NgIf, NgClass],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;

  ngOnInit(): void {
    
  }

}
