import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { trackClick } from '../store/tracking.actions';

@Directive({
  selector: '[appClickTracker]'
})
export class ClickTrackerDirective {
  private el = inject(ElementRef);

  @Input('appClickTracker') tag!: string;

  constructor(private store: Store) {}

  @HostListener('click')
  onClick() {
    this.store.dispatch(trackClick({ tag: this.tag }));
  }
}