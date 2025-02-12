import { Injectable } from '@angular/core';
import {Movies} from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    constructor() { }
protected movieList:Movies[]=
  [
   {
     id:1,
     title:'God Save the Tuche',
     synopsis:'Les Tuche mènent à nouveau une vie paisible à Bouzolles. Mais lorsque le petit-fils de Jeff et Cathy est sélectionné pour un stage de football à Londres, c’est l’occasion rêvée pour toute la famille d’aller découvrir l’Angleterre et de rencontrer la famille royale. Entre chocs culturels et maladresses, les Tuche se retrouvent plongés au cœur de la royauté anglaise, qui n’est pas près d’oublier leur séjour ! Les Tuche mènent à nouveau une vie paisible à Bouzolles. Mais lorsque le petit-fils de Jeff et Cathy est sélectionné pour un stage de football à Londres, c’est l’occasion rêvée pour toute la famille d’aller découvrir l’Angleterre et de rencontrer la famille royale. Entre chocs culturels et maladresses, les Tuche se retrouvent plongés au cœur de la royauté anglaise, qui n’est pas près d’oublier leur séjour ! ',
     poster:'https://fr.web.img2.acsta.net/c_310_420/img/e1/22/e12277d75be8466492265681d0327c11.jpg',
     genre:'Comedie',
     note:2,
     weLike:false,
     minimumAge:0,
     duration:95,
     createdAt:new Date('2025-02-05'),
     updatedAt:new Date('2025-02-05'),
  },
    {
      id:2,
      title:'Jouer avec le feu',
      synopsis:'Pierre élève seul ses deux fils. Louis, le cadet, réussit ses études et avance facilement dans la vie. Fus, l’aîné, part à la dérive. Fasciné par la violence et les rapports de force, il se rapproche de groupes d’extrême-droite, à l’opposé des valeurs de son père. Pierre assiste impuissant à l’emprise de ces fréquentations sur son fils. Peu à peu, l’amour cède place à l’incompréhension…',
      poster:'https://fr.web.img6.acsta.net/c_310_420/img/02/c2/02c28607beda37fdf319f91f48c08e71.jpg',
      genre:'Drame',
      note:3,
      weLike:false,
      minimumAge:0,
      duration:118,
      createdAt:new Date('2025-01-22'),
      updatedAt:new Date('2025-02-05'),
    },
    {
      id:3,
      title:'Paddington au Pérou',
      synopsis:'Alors que Paddington rend visite à sa tante Lucy bien-aimée, qui réside désormais à la Maison des ours retraités au Pérou, la famille Brown et notre ours préféré plongent dans un voyage inattendu et plein de mystères',
      poster:'https://fr.web.img5.acsta.net/c_310_420/img/3d/88/3d888f3f864049f77bc99b83f246312d.jpg',
      genre:'aventure',
      note:3,
      weLike:false,
      minimumAge:0,
      duration:105,
      createdAt:new Date('2025-02-05'),
      updatedAt:new Date('2025-02-05'),
    }
    // {
    //   id:3,
    //   title:,
    //   synopsis:,
    //   poster:,
    //   genre:,
    //   note:,
    //   weLike:false,
    //   minimumAge:0,
    //   duration:,
    //   createdAt:new Date('2025-01-22'),
    //   updatedAt:new Date('2025-02-05'),
    // }
]
  //retourne une liste de films
  getMovies() {
      return this.movieList;
    }
  getMovieById(id:number) {
    return this.movieList.find(movie => movie.id === id);
  }
}
