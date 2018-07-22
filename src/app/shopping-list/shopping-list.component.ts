/*import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'
//import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  //ingredients:Ingredients[];
  ingredients:Ingredients[] = [
    new Ingredients('Apple',5),
    new Ingredients('Banana',50),
    new Ingredients('Orrange',25)

  ];

  constructor() { }
  onIngredientAdded(ingredients:Ingredients){
    this.ingredients.push(ingredients)
  }
  ngOnInit() {
     // this.ingredients = this.slService.getIngredients();
  }

}*/
import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  /*ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];*/
ingredients: Ingredients[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients:Ingredients[]) =>{
          this.ingredients = ingredients;
        }
      )
  }

  /*onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }*/
}
