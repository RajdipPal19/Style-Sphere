import { Component } from '@angular/core';
import { foods } from '../shared/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  [x: string]: any;
  food!:foods;
  constructor(private activatedRoute:ActivatedRoute,private foodservice:FoodService,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food=this.foodservice.getFoodById(params['id']);
      }
    })
  }
  ngOnInit():void{

  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
