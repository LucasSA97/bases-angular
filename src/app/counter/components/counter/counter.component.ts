import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {
  constructor() { }
  public counter: number = 0;

 increaseBy(value: number ):void {
  this.counter += value;
 }

 reset() {
  this.counter = 0
 }

}
