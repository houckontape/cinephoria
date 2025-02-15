import {Component, Input} from '@angular/core';
import {Movies} from '../../../core/model/movies';
import {NgIf, SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [
    SlicePipe,
    RouterLink,
    NgIf
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie!: Movies;

}
