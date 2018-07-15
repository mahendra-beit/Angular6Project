import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[] = [
    new Ingredients('Apple',5),
    new Ingredients('Banana',50),
    new Ingredients('Orrange',25)

  ];

  constructor() { }

  ngOnInit() {
  }

}
