import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '../shared/model/movie-details.model';
import { MovieRatings } from '../shared/model/movie-ratings.model';
import { Movie } from '../shared/model/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieDetails:MovieDetails;
  @Input() currentMovieRatings:MovieRatings[];
  @Input() currentMovie:Movie;

  constructor() { }

  ngOnInit(): void {
  }

  isValid(value: string) {
    return (value) && value !== "N/A";
  }

}
