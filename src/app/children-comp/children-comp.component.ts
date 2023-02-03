import { Component, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './children-comp.component.html',
  styleUrls: ['./children-comp.component.css']
})
export class ChildrenCompComponent {

  counter = 0;
  @Input() plus : string ='';
  @Input() minus : string='';
  @Input() reset : string='';
  @Output() val = new EventEmitter<number>();

  fun(sym : string){
    if(sym == '+'){
      this.counter++;
    }
    else if(sym == '-'){
      this.counter--;
    }
    else if(sym == '0'){
      this.counter = 0;
    }
    this.val.emit(this.counter);

  }
}
