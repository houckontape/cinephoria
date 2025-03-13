import { Component } from '@angular/core';
import {MoviesService} from '../../../core/service/movies.service';
import {Movies} from '../../../core/model/movies';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EMPTY, of, switchMap} from 'rxjs';

@Component({
  selector: 'app-movies-details',
  imports: [],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {
  protected moviesService:MoviesService ;
  public movies: Movies | null = null;
  constructor(private route: ActivatedRoute,) {
    this.moviesService = new MoviesService();

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const movieId = Number(params.get('id'));
        const movie = this.moviesService.getMovieById(movieId);
        return movie ? of(movie) : EMPTY;
      })
    ).subscribe(movie => {
      this.movies = movie;
    });
  }
}

