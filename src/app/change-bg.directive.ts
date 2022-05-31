import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() isCorrect: boolean = false;
  constructor(private ref:ElementRef, private render:Renderer2) { }
  @HostListener("click") answer(){
    if(this.isCorrect){
      this.render.setStyle(this.ref.nativeElement, "background", "green");
      this.render.setStyle(this.ref.nativeElement, "color", "white");
      this.render.setStyle(this.ref.nativeElement, "border", "2px solid gray");
    }
    else {
      this.render.setStyle(this.ref.nativeElement, "background", "red");
      this.render.setStyle(this.ref.nativeElement, "color", "white");
      this.render.setStyle(this.ref.nativeElement, "border", "2px solid gray");

    }
  }
}
