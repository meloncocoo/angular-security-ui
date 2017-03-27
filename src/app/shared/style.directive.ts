import { Directive, ElementRef, Renderer, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[bodyStyle]' })
export class BodyStyleDirective implements OnInit, OnDestroy {
  @Input() public bodyClass: string[];

  constructor(private renderer: Renderer, private el: ElementRef) { }

  public ngOnInit() {
    this.bodyClass.forEach((item) => {
      this.renderer.setElementClass(document.body, item, true);
    });
  }

  public ngOnDestroy() {
    this.bodyClass.forEach((item) => {
      this.renderer.setElementClass(document.body, item, false);
    });
  }
}
