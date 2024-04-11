import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: "Home - Meghana's restuarant"},
  {path: 'menu', component: MenuComponent, title: "menu - Meghana's restuarant"},
  {path: 'cart', component: CartComponent, title: "cart - Meghana's restuarant"}
];