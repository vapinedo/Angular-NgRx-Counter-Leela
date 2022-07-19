import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterStateI } from 'src/app/interfaces/counter.interface';
import { incrementByValue } from 'src/app/state/counter.actions';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {
  constructor(private store: Store<CounterStateI>) { }

  ngOnInit(): void {
  }

  onAddValue(value: string) {
    if (!value) { return };
    this.store.dispatch(incrementByValue({ counter: +value }));
  }

}
