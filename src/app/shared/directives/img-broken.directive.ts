import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    console.log('Esta img no es válida ', this.elHost);
    const elNative = this.elHost.nativeElement;
    elNative.src = 'assets/images/img-broken.jpg'
  }

  constructor(private elHost: ElementRef) { 
  }

}
