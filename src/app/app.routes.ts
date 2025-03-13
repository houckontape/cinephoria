import { Routes } from '@angular/router';
import {ListOfMoviesComponent} from './views/movie/list-of-movies/list-of-movies.component';
import {HomepageComponent} from './views/home/homepage/homepage.component';
import {TheaterComponent} from './views/movieTheater/theater/theater.component';
import {RoomComponent} from './views/movieTheater/room/room.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {MoviesDetailsComponent} from './views/movie/movies-details/movies-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomepageComponent},
  { path: 'movies',component: ListOfMoviesComponent},
  { path: 'movies/:id',component: MoviesDetailsComponent},
  { path: 'movieTheater',component: TheaterComponent },
  { path: 'room',component: RoomComponent },
  { path: '**',component: NotFoundComponent },

];
