import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Iservice } from '../iservice';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
myList: Iservice[];
  recipe: { recipeName: string; description: string; ingredients: string; cookTime: string; directions: string; };

  constructor(private myService: RecipeService) {

this.recipe = {

recipeName: '',
description: '',
ingredients: '',
cookTime: '',
directions: '',
};

  }

  ngOnInit() {
    this.myList = this.myService.getRecipes();
  }

}
