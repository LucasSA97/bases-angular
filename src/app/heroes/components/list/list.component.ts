import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = [
      'Spiderman',
      'Hulk',
      'Batman',
      'Thor'
    ]

    public lastHero? : string

    removeLastHero() : void {
     this.lastHero = this.heroNames.pop()

    }

}
