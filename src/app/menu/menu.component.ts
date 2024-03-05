import { Component, inject } from '@angular/core';
import { IDish } from './dish.model';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { DishComponent } from '../dish/dish.component';
import { CartServiceService } from '../services/cart-service.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuComponent, NgFor, NgIf, NgClass, NgStyle, DishComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  dishes : IDish[];
  filter : string = '';
  // other way of injection, limitation: difficult to write unit tests
  // private cartSrv : CartServiceService = inject(CartServiceService)
  
  // constructor dependency injection
  constructor(private cartSrv : CartServiceService){
    this.dishes = [{
      id : 1,
      description : "This dish is made of malai",
      name : "Rasmalai",
      imageName : "rasmalai.png",
      category : "Sweet",
      price : 50.0,
      discount: 0.5
    },
    {
      id : 2,
      description : "This dish is made of malai",
      name : "Rasagulla",
      imageName : "rasagulla.png",
      category : "Sweet",
      price : 50.0,
      discount: 0
    },
    {
      id : 3,
      description : "This dish is made of rice, chicken and biryani spices",
      name : "Chicken Biryani",
      imageName : "chicken-biryani.png",
      category : "Lunch",
      price : 150.0,
      discount: 0.2
    },
    {
      id : 4,
      description : "This dish is made of floor, vegetables and chat masala",
      name : "Samosa",
      imageName : "samosa.png",
      category : "Snack",
      price : 20.0,
      discount: 0
    },
  ]
  }

  getImageUrl(dish : IDish){
    return '/assets/Images/' + dish.imageName;
  }
 
  getFilteredDishes(){
    return this.filter === ''
    ? this.dishes
    : this.dishes.filter((dish) => dish.category === this.filter);
  }

}
