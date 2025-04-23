import { Component } from "@angular/core";
import { SearchComponent } from "../../components/search/search.component";
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";
import { SearchService } from "@modules/history/services/search.service";
import { TrackModel } from "@core/models/tracks.models";
import { CommonModule } from "@angular/common";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-history-page",
  imports: [SearchComponent, PlayListBodyComponent, CommonModule],
  templateUrl: "./history-page.component.html",
  styleUrl: "./history-page.component.css",
})
export class HistoryPageComponent {

  listResults$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event);
  }
}
