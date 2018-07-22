import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe('A Test Recipe2','Recipe Desc 2','https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',[
            new Ingredients('Mahi1',12),
            new Ingredients('Mahi2',22),
            new Ingredients('Mahi3',42)
        ]),
        new Recipe('A Test Recipe3','Recipe Desc 3','https://flourishyoga.ca/wp-content/uploads/2015/07/healthier-diet-icon1.png',[   
            new Ingredients('Kirti1',12),
        new Ingredients('Kirti12',22),
        new Ingredients('Kirti13',42)]),
        new Recipe('A Test Recipe4','Recipe Desc 4','https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/vampire-512.png',[
            new Ingredients('MS1',12),
        new Ingredients('MS12',22),
        new Ingredients('MS13',42)]),])
     ];

     constructor(private slService:ShoppingListService){

     }
     getRecipes(){
         return this.recipes.slice();
     }
     addIngredientsToshoppingList(ingredients:Ingredients[]){
        this.slService.addIngredientItem(ingredients)
     }
}