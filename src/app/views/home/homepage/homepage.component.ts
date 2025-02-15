import { Component } from '@angular/core';
import {Movies} from '../../../core/model/movies';
import {MoviesService} from '../../../core/service/movies.service';
import {NgForOf} from '@angular/common';
import {MovieCardComponent} from '../../movie/movie-card/movie-card.component';

@Component({
  selector: 'app-homepage',
  imports: [
    NgForOf,
    MovieCardComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  public title = 'Cinephoria';
  protected moviesService:MoviesService ;
  protected lastMoviesAdd:Movies[];

  constructor() {
    this.moviesService=new MoviesService();
    this.lastMoviesAdd = this.moviesService.homemovies();

  }
}
