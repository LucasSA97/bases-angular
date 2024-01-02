import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDbzComponent {

  @Input()

  public characterList: Character[] = [
    {
      name: 'trunks',
      power: 200
    }
  ]
}
