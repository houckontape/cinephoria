import { Routes } from '@angular/router';
import {ListOfMoviesComponent} from './views/movie/list-of-movies/list-of-movies.component';
import {HomepageComponent} from './views/home/homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomepageComponent},
  { path: 'movies',component: ListOfMoviesComponent},

];
