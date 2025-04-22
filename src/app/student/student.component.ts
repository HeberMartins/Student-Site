import { Component, OnInit } from '@angular/core';
import {StudentService} from '../students.service';
import {Student} from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {


  student: Student[] = [];
  formGroupStudent : FormGroup;


  constructor(private service: StudentService, 
                private formBuilder: FormBuilder
  ) {

    this.formGroupStudent = this.formBuilder.group({
      id : [''],
      name: [''],
      course: ['']
    }) 
   }

  ngOnInit(): void {
    this.service.getStudent().subscribe({
       next: json => this.student = json
    });
 }
 save() {
 this.service.saveStudent(this.formGroupStudent.value).subscribe({
   next: json => {this.student.push(json);
    this.formGroupStudent.reset()}
 }) 
}


}
