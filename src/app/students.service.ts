import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  apiUrl = ' http://localhost:3000/student';
  constructor(private http: HttpClient) { }
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl)
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student)
  }
}
