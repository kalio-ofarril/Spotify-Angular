import { Component, OnInit } from "@angular/core";
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";

import { TrackModel } from "@core/models/tracks.models";
import { TrackService } from "@modules/tracks/services/track.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-tracks-page",
  imports: [SectionGenericComponent],
  templateUrl: "./tracks-page.component.html",
  styleUrl: "./tracks-page.component.css",
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  async loadAllData(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  }

  loadRandomData(): void {
    this.trackService.getAllRandom$().subscribe((response) => {
      this.tracksRandom = response;
    }, err => {
      console.log("Error ", err)
    });
  }

  ngOnInit(): void {
    this.loadAllData();
    this.loadRandomData();
  }

  ngOnDestroy(): void {}
}
