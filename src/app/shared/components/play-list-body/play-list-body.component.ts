import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.models';
import { OrderListPipe } from "../../pipe/order-list.pipe";

@Component({
  selector: 'app-play-list-body',
  imports: [NgFor, CommonModule, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{

  tracks: TrackModel[] = [];
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

  ngOnInit(): void {
    const { data } : any = (dataRaw as any).default;
    this.tracks = data;
  }

}
