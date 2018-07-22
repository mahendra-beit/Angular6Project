import {Ingredients}    from '../shared/ingredients.model'
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredients[]>();
 private  ingredients:Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Banana',50),
        new Ingredients('Orrange',25)
    
      ];
      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredients(ingredients:Ingredients){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredientItem(ingredients:Ingredients[]){
       /*  for(let ingredientItem of ingredients){
          this.addIngredients(ingredientItem)
        } */
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
      } 
}