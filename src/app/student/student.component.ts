import { Component, OnInit } from '@angular/core';
import {StudentService} from '../students.service';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  student: Student[] = [];


  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.getStudent().subscribe({
       next: json => this.student = json
    });
 }
}
