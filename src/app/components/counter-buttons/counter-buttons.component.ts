import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDecrement(): void {
    this.decrement.emit();
  }

  onIncrement(): void {
    this.increment.emit();
  }

  onReset(): void {
    this.reset.emit();
  }

}
