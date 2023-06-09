import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  static delay: number = 0; // shared between all instances of this directive

  constructor(private element: ElementRef) {}

  public updateAnimation(isVisible: boolean): void {
    const element = this.element.nativeElement;
    if (isVisible) {
      if (!element.classList.contains('float')) {
        element.style.animationDelay = `${ScrollAnimationDirective.delay}s`;
        element.classList.add('float');
        this.increaseDelay();
      }
    } else {
      element.classList.remove('float');
      this.resetDelay();
    }
  }

  private increaseDelay() {
    ScrollAnimationDirective.delay += 0.25;
  }

  private resetDelay() {
    ScrollAnimationDirective.delay = 0;
  }
  
}
