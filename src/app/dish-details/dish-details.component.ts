import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDish } from '../menu/dish.model';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-dish-details',
  standalone: true,
  imports: [ NgClass, NgIf, CurrencyPipe],
  templateUrl: './dish-details.component.html',
  styleUrl: './dish-details.component.css'
})
export class DishDetailsComponent {
  @Input() dish!: IDish;
  @Output() buy = new EventEmitter();

  getImageUrl(dish: IDish) {
    if (!dish) return '';
    return '/assets/Images/' + dish.imageName;
  }

  buyButtonClicked(dish: IDish) {
    this.buy.emit();
  }
}
