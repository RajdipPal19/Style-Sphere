import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { foods } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):foods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodsByTag(tag: string): foods[] {
    if (tag == 'All')
      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name:'Courses', count:5},
      {name:'Degree',count:1},
      {name:'NoteBook',count:2},
      {name:'Pen',count:2},
      {name:'TextBook',count:4},
      {name:'Pencile',count:2},
      {name:'Eraser',count:2},
      {name:'Ruler',count:2}
    ]
  }
  getAll(): foods[] {
    return [
      {
        id: 1,
        name: 'NoteBook',
        cookTime: '10-20',
        price: 39,
        favorite: true,
        imageUrl: "/assets/study_img03.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['NoteBook'],
      },
      {
        id: 2,
        name: 'Python for ML',
        cookTime: '10-20',
        price: 34999,
        favorite: false,
        imageUrl: '/assets/study_img04.jpg',
        origins: ['India'],
        star: 4.5,
        tags: ['Courses']
      },
      {
        id: 3,
        name: 'Classmate copy',
        cookTime: '10-20',
        price: 79,
        favorite: false,
        imageUrl: "/assets/study_img01.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['NoteBook'],
      },
      {
        id: 4,
        name: 'English book',
        cookTime: '10-20',
        price: 249,
        favorite: false,
        imageUrl: "/assets/eng.png",
        origins: ['India'],
        star: 4.5,
        tags: ['TextBook', 'motivation', 'full marks'],
      },
      {
        id: 5,
        name: 'Maths',
        cookTime: '10-20',
        price: 349,
        favorite: false,
        imageUrl: "/assets/math.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['TextBook', 'motivation', 'full marks'],
      },
      {
        id: 6,
        name: 'History',
        cookTime: '10-20',
        price: 249,
        favorite: false,
        imageUrl: '/assets/his.jpg',
        origins: ['India'],
        star: 4.5,
        tags: ['TextBook', 'motivation', 'full marks'],
      },
      {
        id: 7,
        name: 'Geography',
        cookTime: '10-20',
        price: 249,
        favorite: false,
        imageUrl: "/assets/geo.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['TextBook', 'motivation', 'full marks'],
      },
      {
        id: 8,
        name: 'HTML',
        cookTime: '6 months',
        price: 19999,
        favorite: false,
        imageUrl: "/assets/study_img02.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Courses', 'motivation', 'full marks'],
      },
      {
        id: 9,
        name: 'React',
        cookTime: '6 Months',
        price: 14999,
        favorite: false,
        imageUrl: "/assets/react.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Courses', 'motivation', 'full marks'],
      },
      {
        id: 10,
        name: 'Angular',
        cookTime: '10-20',
        price: 12999,
        favorite: false,
        imageUrl: '/assets/angularpng.png',
        origins: ['India'],
        star: 4.5,
        tags: ['Courses', 'motivation', 'full marks'],
      },
      {
        id: 11,
        name: 'MERN stack',
        cookTime: '12 months',
        price: 29999,
        favorite: false,
        imageUrl: "/assets/mern.png",
        origins: ['India'],
        star: 4.5,
        tags: ['Degree', 'motivation', 'full marks'],
      },
      {
        id: 12,
        name: 'Vue.js',
        cookTime: '3 months',
        price: 4999,
        favorite: false,
        imageUrl: "/assets/vuejpg.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Courses', 'motivation', 'full marks'],
      },
      {
        id: 13,
        name: 'Ball Pen',
        cookTime: '10-20',
        price: 19,
        favorite: false,
        imageUrl: "/assets/pen.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Pen'],
      },
      {
        id: 14,
        name: 'Fountain Pen',
        cookTime: '10-20',
        price: 129,
        favorite: false,
        imageUrl: "/assets/pen2.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Pen'],
      },
      {
        id: 15,
        name: 'Color Pencile',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        imageUrl: "/assets/pencile.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Pencile'],
      },
      {
        id: 16,
        name: 'Pencile',
        cookTime: '10-20',
        price: 12,
        favorite: false,
        imageUrl: "/assets/pencile2.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Pencile'],
      },
      {
        id: 17,
        name: 'Eraser',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        imageUrl: "/assets/eraser.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Eraser'],
      },
      {
        id: 18,
        name: 'Eraser',
        cookTime: '10-20',
        price: 9,
        favorite: false,
        imageUrl: "/assets/eraser2.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Eraser'],
      },
      {
        id: 19,
        name: 'Ruler',
        cookTime: '10-20',
        price: 29,
        favorite: false,
        imageUrl: "/assets/rular.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Ruler'],
      },
      {
        id: 20,
        name: 'Ruler',
        cookTime: '10-20',
        price: 39,
        favorite: false,
        imageUrl: "/assets/rular2.jpg",
        origins: ['India'],
        star: 4.5,
        tags: ['Ruler'],
      }


    ];
  }
}
