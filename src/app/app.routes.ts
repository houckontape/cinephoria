import { Routes } from '@angular/router';
import {ListOfMoviesComponent} from './views/movie/list-of-movies/list-of-movies.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: ListOfMoviesComponent},
  { path: 'movies',component: ListOfMoviesComponent},

];
