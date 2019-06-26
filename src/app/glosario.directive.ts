import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGlosario]'
})
export class GlosarioDirective {

  constructor(private elRef: ElementRef,  // ElementRef para seleccionar elementos del DOM
              private renderer: Renderer2) { } // Renderer2 para manipular los elementos del DOM

  @HostListener('mouseover') onOver() {
    const span = this.elRef.nativeElement.querySelector('span');
    this.renderer.addClass(span, 'activo');
  }

  @HostListener('mouseout') onOut() {
    const span = this.elRef.nativeElement.querySelector('span');
    this.renderer.removeClass(span, 'activo');
  }

}
