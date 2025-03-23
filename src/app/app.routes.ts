import { Routes } from '@angular/router';
import {ListOfMoviesComponent} from './views/movie/list-of-movies/list-of-movies.component';
import {HomepageComponent} from './views/home/homepage/homepage.component';
import {TheaterComponent} from './views/movieTheater/theater/theater.component';
import {RoomComponent} from './views/movieTheater/room/room.component';
import {AuthService} from './core/service/auth.service';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {MoviesDetailsComponent} from './views/movie/movies-details/movies-details.component';
import {LoginComponent} from './views/auth/login/login.component';
import {RegistryComponent} from './views/auth/registry/registry.component';
import {ProfilComponent} from './views/user/profil/profil.component';
import {DashboardComponent} from './views/admin/dashboard/dashboard.component';
import {ManageMovieComponent} from './views/admin/manage-movie/manage-movie.component';
import {ManageRoomComponent} from './views/admin/manage-room/manage-room.component';
import {ManageSessionComponent} from './views/admin/manage-session/manage-session.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomepageComponent},
  { path: 'movies',component: ListOfMoviesComponent},
  { path: 'movies/:id',component: MoviesDetailsComponent},
  { path: 'movieTheater',component: TheaterComponent },
  { path: 'login',component: LoginComponent},
  { path: 'register',component: RegistryComponent},
  // chemin accessible si identifier et en fonction du role
  // toutlemonde
  {path: 'profil', component:ProfilComponent},
  //admin
  {path: 'dashboard', component:DashboardComponent},
  {path: 'manageMovies', component:ManageMovieComponent},
  {path: 'manageRooms', component:ManageRoomComponent},
  {path: 'manageSessions',component:ManageSessionComponent},
  // pas 404
  { path: '**',component: NotFoundComponent },

];
