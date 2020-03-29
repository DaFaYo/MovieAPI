import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/model/movie.model';
import { MovieService } from '../shared/service/movie.service';
import { MovieDetails } from '../shared/model/movie-details.model';
import { MovieRatings } from '../shared/model/movie-ratings.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  currentMovie: Movie;
  currentMovieRatings: MovieRatings[];
  currentMovieDetails$: Observable<MovieDetails>;
  movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  searchMovies(keyword: string) {
    this.movies$ = this.movieService.searchMovies(keyword);
  }
  
  getMovieDetails(movie: Movie) {
    this.currentMovie = movie;
    this.currentMovieDetails$ = this.movieService.getMovieDetails(movie.imdbID);
    this.currentMovieRatings = this.movieService.getCurrentMovieRatings();
  }



}
