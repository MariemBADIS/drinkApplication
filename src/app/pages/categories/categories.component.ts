import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [];

  constructor() { }

  ngOnInit(): void {
    this.getCategorie();
  }

  public getCategorie() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => {
        console.log(res.data);
        this.categories = res.data.drinks;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
