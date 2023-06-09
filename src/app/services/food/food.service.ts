import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/share/models/food';
import { Tag } from 'src/app/share/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }


  getFoodById(id: number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  

  getAllFoodsBySearchTerm(searchTerm:string) :Foods[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Lunch', count: 6 },
      { name: 'FastFood', count: 5 },
      { name: 'Fry', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Pizza', count: 1 },
      { name: 'samosa', count: 1 },
      { name: 'Health', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Panner Butter Masala',
        price: 180,
        cookTime: '20-25',
        favorite: true,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: '/assets/food-6.jpg',
        tags: ['SlowFood', 'panner', 'Dinner'],
      },

      {
        id: 2,
        name: 'Samosa',
        price: 50,
        cookTime: '5-10',
        favorite: true,
        origins: ['India', 'Middle East'],
        star: 5.0,
        imageUrl: '/assets/food-2.webp',
        tags: ['samosa', 'Lunch'],
      },

      {
        id: 3,
        name: 'pasta',
        price: 100,
        cookTime: '10-20',
        favorite: false,
        origins: ['Asia', 'China'],
        star: 3.0,
        imageUrl: '/assets/food-3.jpeg',
        tags: ['FastFood', 'Pasta', 'Lunch'],
      },

      {
        id: 4,
        name: 'Pizza Pepperoni',
        price: 280,
        cookTime: '35-40',
        favorite: true,
        origins: ['italy'],
        star: 5.0,
        imageUrl: '/assets/food-4.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },

      {
        id: 5,
        name: 'Nuddles',
        price: 150,
        cookTime: '15-20',
        favorite: false,
        origins: ['Asia', 'China'],
        star: 4.0,
        imageUrl: '/assets/food-5.jpeg',
        tags: ['FastFood', 'Nuddles', 'Fry'],
      },

      {
        id: 6,
        name: 'Sandwich' ,
        price: 120,
        cookTime: '10-15',
        favorite: false,
        origins: ['England'],
        star: 4.0,
        imageUrl: '/assets/food-1.jpg' ,
        tags: ['salad', 'Sandwich', 'Lunch', 'Fry', 'vegetables', 'meat'],
      },

      {
        id: 7,
        name: 'Burger',
        price: 80,
        cookTime: '10-20',
        favorite: true,
        origins: ['United State', 'Germany'],
        star: 5.0,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'buger', 'Lunch', 'Fry'],
      },

      {
        id: 8,
        name: 'Salad',
        price: 200,
        cookTime: '15-25',
        favorite: false,
        origins: ['Romans'],
        star: 3.0,
        imageUrl: '/assets/food-8.jpeg',
        tags: ['Healthy', 'Salad', 'Lunch', 'SlowFood'],
      }
    ];

  }
}

