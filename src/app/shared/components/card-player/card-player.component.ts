import { NgClass, NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { TrackModel } from "@core/models/tracks.models";
import { ImgBrokenDirective } from "@shared/directives/img-broken.directive";
import { MultimediaService } from "@shared/services/multimedia.service";

@Component({
  selector: "app-card-player",
  imports: [NgIf, NgClass, ImgBrokenDirective],
  templateUrl: "./card-player.component.html",
  styleUrl: "./card-player.component.css",
})
export class CardPlayerComponent implements OnInit {
  @Input({required: true}) mode: "small" | "big" = "small";
  @Input() track: TrackModel = {
    _id: 0,
    name: "",
    album: "",
    url: "",
    cover: "",
  };

  constructor(private multimediaService: MultimediaService) {}

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track);
  }

  ngOnInit(): void {}
}
