import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {  } from "stream";

@Component({
  selector: "app-search",
  imports: [FormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  src: string = "";

  callSearch(term: string): void {
    if (term.length >= 3) {
      this.callbackData.emit(term);
    }
  }
}
