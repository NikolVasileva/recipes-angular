import { Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputError]',
})
export class InputErrorDirective implements OnInit {
  private element = inject(ElementRef);
  private control = inject(NgControl, { optional: true });

  // @HostBinding("class.input-error") get hasError(): boolean {
  //   return (this.control?.invalid && this.control?.touched) || false;
  // }

  @HostBinding("class.input-error")
  get hasError(): boolean {
    const control = this.control;

    return !!(control && (control.dirty || control.touched) && control.invalid);
  }

  ngOnInit(): void {
    this.element.nativeElement.classList.remove("input-error")
  }

}
