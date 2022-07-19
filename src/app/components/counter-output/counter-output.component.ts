import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterStateI } from 'src/app/interfaces/counter.interface';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<CounterStateI>;

  constructor(private store: Store<{ counter: CounterStateI }>) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {
  }
}
