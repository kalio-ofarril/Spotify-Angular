import { CommonModule, NgIf } from "@angular/common";
import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TrackModel } from "@core/models/tracks.models";
import { destroyCustom } from "@core/utils/destroyCustom";
import { MultimediaService } from "@shared/services/multimedia.service";
import { Subject, Subscription, takeUntil } from "rxjs";

@Component({
  selector: "app-media-player",
  imports: [NgIf, CommonModule],
  templateUrl: "./media-player.component.html",
  styleUrl: "./media-player.component.css",
})
export class MediaPlayerComponent implements OnInit {
  @ViewChild("progressBar") progressBar: ElementRef = new ElementRef("");

  public multimediaService = inject(MultimediaService);
  state: string = "paused";
  destroyCustom = destroyCustom();

  // destroyRef = inject(DestroyRef);
  // destroy$ = new Subject();

  // listObservers$: Array<Subscription> = [];

  // ngOnDestroy(): void {
  //   // this.destroy$.next(); // antes del takeUntilDestroy
  // }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      //.pipe(takeUntilDestroyed(this.destroyRef)) // usando takeUntilDestroy
      //.pipe(takeUntil(this.destroy$)) // antes del takeUntilDestroy
      .pipe(this.destroyCustom())
      .subscribe((status) => (this.state = status));

    // this.listObservers$ = [observer1$];
  }

  handlePosition(evt: MouseEvent) {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = evt;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(percentageFromX);
  }
}
