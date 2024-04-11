import { Injectable } from '@angular/core';
import { IDish } from './menu/dish.model';
import { ILineItem } from './menu/line-item.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart : IDish[] = [];
  private oldCart: ILineItem[] = [];

  constructor(private http: HttpClient) {}

  getTotalPrice() {
    return (
      Math.round(
        this.oldCart.reduce<number>((prev, cur) => {
          return (
            prev + cur.qty * (cur.dish.price * (1 - cur.dish.discount))
          );
        }, 0) * 100
      ) / 100
    );
  }

  findLineItem(dish: IDish) {
    return this.oldCart.find((li) => li.dish.id === dish.id);
  }

  add(dish: IDish) {
    this.cart.push(dish);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log('added ' + dish.name + ' to cart!');
    }); 

    // converts javascript to json and sends it to the request.
    // let lineItem = this.findLineItem(dish);
    // if (lineItem !== undefined) {
    //   lineItem.qty++;
    // } else {
    //   lineItem = { dish: dish, qty: 1 };
    //   this.cart.push(lineItem);
    // }
    
    // console.log('Total Price: $' + this.getTotalPrice());
  }
}
