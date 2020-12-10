import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Courses } from './model';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private Url = 'api/course_data';
  private contentUrl = 'api/content';
constructor(private http: HttpClient) { }

getCourses(): Observable<Courses[]>{
  return this.http
  .get<Courses[]>(this.Url).pipe(catchError(this.handleError('getCourses', [])))
}

getContent(): Observable<any[]> {
  return this.http
  .get<any[]>(this.contentUrl).pipe(catchError(this.handleError('getContent', [])))
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
}
}
