import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A Test Recipe2','Recipe Desc 2','https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('A Test Recipe3','Recipe Desc 3','https://flourishyoga.ca/wp-content/uploads/2015/07/healthier-diet-icon1.png'),
    new Recipe('A Test Recipe4','Recipe Desc 4','https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/vampire-512.png')
    new Recipe('A Test Recipe5','Recipe Desc 5','https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/vampire-512.png')
    new Recipe('A Test Recipe6','Recipe Desc 6','https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/vampire-512.png')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
