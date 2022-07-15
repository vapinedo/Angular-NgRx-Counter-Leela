import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { decrement, increment, reset } from 'src/app/state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }

}
