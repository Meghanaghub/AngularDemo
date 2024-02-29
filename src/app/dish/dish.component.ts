import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDish } from '../menu/dish.model';
import { CurrencyPipe, NgClass, NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [NgStyle, NgClass, NgIf, CurrencyPipe],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent {
  @Input() dish!: IDish;
  @Output() buy = new EventEmitter()
  

  getImageUrl(dish : IDish){
    return '/assets/Images/' + dish.imageName;
  }

  getDiscountedDishes(dish : IDish){
    if(dish.discount > 0) return 'strikethrough';
    else return '';
  }

  buyButtonClicked(dish : IDish){
    this.buy.emit();
  }
}
