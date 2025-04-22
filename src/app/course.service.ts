import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}
    getCourse(): Observable<Course[]> {
      return this.http.get<Course[]>(this.apiUrl)
    }
  
    saveCourse(course: Course): Observable<Course> {
      return this.http.post<Course>(this.apiUrl, course)
    }
}
