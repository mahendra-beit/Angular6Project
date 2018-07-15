import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A Test Recipe2','Recipe Desc','https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('A Test Recipe3','Recipe Desc','https://flourishyoga.ca/wp-content/uploads/2015/07/healthier-diet-icon1.png'),
    new Recipe('A Test Recipe4','Recipe Desc','https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/vampire-512.png')
    new Recipe('A Test Recipe5','Recipe Desc','http://www.pvhc.net/img46/ilesfzsdzejdwnteeqla.jpg')
    new Recipe('A Test Recipe6','Recipe Desc','http://www.pvhc.net/img46/ilesfzsdzejdwnteeqla.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
