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

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksTrending = response;
        console.log("canciones trending 👌 --->", response);
      }
    );

    const observer2$ = this.trackService.dataTracksRandom$.subscribe(
      (response) => {
        this.tracksRandom = [...this.tracksRandom, ...response];
        console.log("canciones random 👍 --->", response);
      }
    );

    this.listObservers$ = [observer1$, observer2$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(o => o.unsubscribe());
  }
}
