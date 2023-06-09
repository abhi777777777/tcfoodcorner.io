import { Component, NgModule, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../share/models/food';
// import { StarRatingComponent } from 'ng-starrating/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) { }


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAllFoodsBySearchTerm(params['searchItem']);
        else if (params['tag'])
        this.foods = this.fs.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.fs.getAll();
    })

  }

}
