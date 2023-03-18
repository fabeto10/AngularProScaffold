import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFirstLetterHighlight]',
})
export class FirstLetterHighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const textContent = this.el.nativeElement.textContent;
    if (!textContent) {
      return;
    }

    const firstLetter = textContent.charAt(0);
    const remainingText = textContent.slice(1);

    const span = this.renderer.createElement('span');
    this.renderer.setStyle(span, 'font-size', '1.5em');
    this.renderer.setStyle(span, 'background-color', 'yellow');
    this.renderer.setStyle(span, 'font-weight', 'bold');
    this.renderer.setProperty(span, 'textContent', firstLetter);

    this.renderer.setProperty(
      this.el.nativeElement,
      'textContent',
      remainingText
    );
    this.renderer.insertBefore(
      this.el.nativeElement,
      span,
      this.el.nativeElement.firstChild
    );
  }
}
