import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDish } from "./dish.model";


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getdishes() : Observable<IDish[]>{
    return this.http.get<IDish[]>('/api/products');
  }
  
}
