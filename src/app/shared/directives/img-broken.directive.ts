import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  @Input() customImg: string | boolean = false;

  @HostListener('error') handleError(): void {
    console.log('😒😒😒😒😒😒😒')
    const elNative = this.elHost.nativeElement;

    if(this.customImg){
      elNative.src = this.customImg;
    }else{
      elNative.src = 'assets/images/img-broken.jpg'
    }

  }

  constructor(private elHost: ElementRef) { 
  }

}
