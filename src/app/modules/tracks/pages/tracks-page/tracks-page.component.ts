import { Component, inject, Input, OnInit } from "@angular/core";
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";

import { TrackModel } from "@core/models/tracks.models";
import { TrackService } from "@modules/tracks/services/track.service";
import { Subscription } from "rxjs";
import { getAllRandom$, getAllTracks$, getCurrentUser } from "@modules/tracks/services/tracksv2.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tracks-page",
  imports: [SectionGenericComponent, CommonModule],
  templateUrl: "./tracks-page.component.html",
  styleUrl: "./tracks-page.component.css",
})
export class TracksPageComponent{

  @Input() currentUser: any;

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(){

    getAllTracks$().subscribe((response) => {
      this.tracksTrending = response;
    });

    getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response;
    });
  }
}
