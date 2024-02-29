import { Injectable } from '@angular/core';
import { IDish } from '../menu/dish.model';
import { ILineItem } from '../menu/line-item.model';


@Injectable({
  providedIn: 'root' // service is available anywhere in the application
})
export class CartServiceService {

  private cart : ILineItem[] = [];
  
  constructor() { }

  getTotalPrice(){
    return(
      Math.round( this.cart.reduce<number>((prev,cur) => {
        return (
          prev + cur.qty * (cur.dish.price * (1 - cur.dish.discount))
        );
      },0) * 100
    )/ 100
    );
  }

  findLineItem(dish : IDish){
    return this.cart.find((li) => li.dish.id === dish.id);
  }

  add(dish :  IDish){
    let lineItem = this.findLineItem(dish);
    if( lineItem !== undefined){
      lineItem.qty++;
    }
    else{
      lineItem = { dish : dish, qty: 1};
      this.cart.push(lineItem);
    }

    console.log('added' + dish.name + 'to cart!');
    console.log('Total Price : ' + this.getTotalPrice());
  }
}
