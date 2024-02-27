import { Component, Input } from '@angular/core';
import { IDish } from '../menu/dish.model';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-dish',
  standalone: true,
  imports: [NgStyle, NgClass,],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent {
  @Input() dish!: IDish;
  cart! : IDish[];

  getImageUrl(dish : IDish){
    return '/assets/Images/' + dish.imageName;
  }

  getDiscountedDishes(dish : IDish){
    if(dish.discount > 0) return 'strikethrough';
    else return '';
  }

  addToCart(dish : IDish){
    this.cart.push(dish);
    console.log(`dish ${dish.name} added to cart`);
  }
}
