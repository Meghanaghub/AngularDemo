import { NgFor, NgIf, NgClass, NgStyle } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { DishComponent } from "../dish/dish.component";
import { CartServiceService } from "../services/cart-service.service";
import { IDish } from "./dish.model";
import { DishService } from "./dish.service";



@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuComponent, NgFor, NgIf, NgClass, NgStyle, DishComponent, HttpClientModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  dishes! : IDish[];
  filter : string = '';
  // other way of injection, limitation: difficult to write unit tests
  // private cartSrv : CartServiceService = inject(CartServiceService)
  
  // constructor dependency injection
  constructor(private cartSrv : CartServiceService, private dishSrv : DishService){
    
  }

  ngOnInit(){
    this.dishSrv.getdishes().subscribe(dishes => {
      this.dishes = dishes;
    })
  }
 
  addToCart(dish :  IDish){
    this.cartSrv.add(dish);
  }
 
  getFilteredDishes(){
    return this.filter === ''
    ? this.dishes
    : this.dishes.filter((dish) => dish.category === this.filter);
  }

}
