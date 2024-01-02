import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id? : string ) : void {
      if( !id ) return


      this.onDelete.emit(id)
    }

  // @Output()
  // public onDelete: EventEmitter<string> = new EventEmitter()

  // onDeleteCharacter(id? : string) : void {
  //   if( !id ) return
  //    this.onDelete(id)
  // }
}

