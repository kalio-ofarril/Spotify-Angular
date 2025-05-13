import { Component, ElementRef } from "@angular/core";
import { ImgBrokenDirective } from "./img-broken.directive";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  standalone: true,
  imports: [ImgBrokenDirective],
  template: `<img class="testing-directive" appImgBroken [src]="srcMock">`
})

class TestComponent {
  srcMock: string | null = null;
}

describe("ImgBrokenDirective", () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create an instance", () => {
    const mockElement = new ElementRef("");
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it("TestComponent should instanciate correctly", () => {
    expect(component).toBeTruthy();
  });

  it("Directive should change the img src on error", (done: DoneFn) => {
    const img = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
  
    img.dispatchEvent(new Event('error'));
    fixture.detectChanges();
  
    setTimeout(() => {
      console.log('Final img.src:', img.src);
      expect(img.src.endsWith('/assets/images/img-broken.jpg')).toBeTrue();
      done();
    }, 0);
  });
  
  
});
