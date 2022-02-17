import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Movie';
import { Visitor } from '../models/Visitor';

@Injectable({
     providedIn: 'root'
})
export class MovieService {

    constructor() { }

    private movieSource = new Subject<Movie>();
    publishedMovie = this.movieSource.asObservable();

    movieAnnouncement(movie:Movie){
        this.movieSource.next(movie);
    }




    private visitorSource = new Subject<Visitor>();
    visitorSourceObservable = this.visitorSource.asObservable();

    announceVisitor(visitor:Visitor){
        this.visitorSource.next(visitor);
    }




}
