import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// State :: NgRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterCustomInputComponent } from './components/counter-custom-input/counter-custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    CounterCustomInputComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
