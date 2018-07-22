import { Ingredients } from "../shared/ingredients.model";

export class Recipe {
  public name: String;
  public description: String;
  public imagePath:String;
  public ingredients: Ingredients[];
  constructor(name:String,desc:String,imgPath:String,ingredients: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath= imgPath;
        this.ingredients= ingredients;
        
  } 

}