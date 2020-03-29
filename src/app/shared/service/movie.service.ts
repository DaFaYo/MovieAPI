import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { map, tap } from 'rxjs/operators';
import { MovieDetails } from '../model/movie-details.model';
import { MovieRatings } from '../model/movie-ratings.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private currentMovieRatings: MovieRatings[];
  private url: string = "http://www.omdbapi.com/?apikey=1c5632f1&";
  constructor(private http: HttpClient) { }

  searchMovies(keyword): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + `s=${keyword}`)
      .pipe(map(result => result["Search"]));
    
  }

  getMovieDetails(movieID: string): Observable<MovieDetails> {

    this.currentMovieRatings = [];
    return this.http.get<MovieDetails>(this.url + `i=${movieID}`)
      .pipe(
        tap(ev => 
          ev["Ratings"].forEach( 
            (rating) => {
              this.currentMovieRatings.push(new MovieRatings(rating["Source"], rating["Value"]));
            }
          )
        )
      );
    }

  getCurrentMovieRatings() {
    return this.currentMovieRatings;
  }

}
