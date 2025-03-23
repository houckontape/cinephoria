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
    },
    {
      id:4,
      title:"Captain America",
      synopsis:"Peu après avoir fait la connaissance du nouveau président des Etats-Unis Thaddeus Ross, Sam Wilson se retrouve plongé au coeur d'un gigantesque incident international. Dans une lutte acharnée contre la montre, il se retrouve contraint de découvrir la raison de cet infâme complot avant que le véritable cerveau de l’opération ne mette bientôt le monde entier à feu et à sang…",
      poster:"https://fr.web.img6.acsta.net/c_310_420/img/92/55/9255d9aeb17004f6a622cc47e573777e.jpg",
      genre:"tout public",
      note:3,
      weLike:false,
      minimumAge:0,
      duration:118,
      createdAt:new Date('2025-02-15'),
      updatedAt:new Date('2025-02-15'),
    },
    {
      id:5,
      title:"Une nuit au zoo",
      synopsis:"Une nuit, une météorite s'écrase sur le zoo de Colepepper, libérant un virus qui transforme les animaux en mutants zombies baveux ! Gracie, une jeune louve excentrique, s'associe avec Dan, un puma bourru et redoutable, pour trouver un moyen de retourner à sa meute. Alors que tout le zoo va être contaminé, ils doivent élaborer un plan pour que les animaux redeviennent eux-mêmes. Avec l'aide d'un groupe de survivants - Xavier, le lémurien cinéphile ; Frida, la capybara fougueuse ; Ash, l'autruche sarcastique et Félix, le singe perfide - ils se lancent dans une mission périlleuse pour vaincre les zombies, déterminés à répandre le virus au-delà des murs du zoo. Bienvenue dans l’horrible…. NUIT AU ZOO ! ",
      poster:"https://fr.web.img5.acsta.net/c_310_420/img/b4/64/b4641e64e7317bec7286462fe922635f.jpg",
      genre:"animation",
      note:3,
      weLike:false,
      minimumAge:0,
      duration:91,
      createdAt:new Date('2025-02-15'),
      updatedAt:new Date('2025-02-15'),
    },
    {
      id:6,
      title:"Un parfait inconnu",
      synopsis:"New York, 1961. Alors que la scène musicale est en pleine effervescence et que la société est en proie à des bouleversements culturels, un énigmatique jeune homme de 19 ans débarque du Minnesota avec sa guitare et son talent hors normes qui changeront à jamais le cours de la musique américaine. ",
      poster:"https://fr.web.img6.acsta.net/c_310_420/img/7b/09/7b09c04859a7716e5fc78882f2f4b530.jpg",
      genre:"biopic",
      note:4,
      weLike:true,
      minimumAge:0,
      duration:140,
      createdAt:new Date('2025-02-15'),
      updatedAt:new Date('2025-02-15'),
    },
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
    // },
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

  sortMoviesByDate(movies: Movies[]): Movies[] {
    return movies.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  homemovies(){
     let moviesHome=this.sortMoviesByDate(this.movieList);
     return moviesHome.slice(0,3);
  }

}
