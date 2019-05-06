import { Injectable } from '@angular/core';
import { Iservice } from './iservice';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeDetail: Iservice;
  myRecipes: Iservice[];
  constructor() {
    this.myRecipes = [];
  }

  getRecipes() {
    return this.myRecipes;
  }



}
