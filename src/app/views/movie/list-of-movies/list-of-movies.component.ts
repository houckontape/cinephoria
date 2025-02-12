import { Component } from '@angular/core';
import {Movies} from '../../../core/model/movies';
import {MoviesService} from '../../../core/service/movies.service';
import {NgForOf} from '@angular/common';
import {MovieCardComponent} from '../movie-card/movie-card.component';



@Component({
  selector: 'app-list-of-movies',
  imports: [
    NgForOf,
    MovieCardComponent
  ],
  templateUrl: './list-of-movies.component.html',
  styleUrl: './list-of-movies.component.css'
})
export class ListOfMoviesComponent {
    protected moviesService:MoviesService ;
    public moviesList:Movies[] ;

    constructor() {
      this.moviesService=new MoviesService();
      this.moviesList = this.moviesService.getMovies();

    }
}
