import {Component, Input} from '@angular/core';
import {Movies} from '../../../core/model/movies';
import {SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [
    SlicePipe,
    RouterLink
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movies;

}
