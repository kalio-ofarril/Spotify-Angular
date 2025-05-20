import { JsonPipe, NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { CardPlayerComponent } from '../card-player/card-player.component';

@Component({
  selector: 'app-section-generic',
  imports: [NgClass, NgFor, CardPlayerComponent],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit{

  @Input({required: true}) title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  ngOnInit(): void {

  }
  
}
