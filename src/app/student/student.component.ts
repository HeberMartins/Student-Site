import { Component, OnInit } from '@angular/core';
import { StudentService } from '../students.service';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {





  student: Student[] = [];
  formGroupStudent: FormGroup;
  isdEditing: boolean = false;


  constructor(private service: StudentService,
    private formBuilder: FormBuilder
  ) {

    this.formGroupStudent = this.formBuilder.group({
      id: [''],
      name: [''],
      course: ['']
    })
  }

  ngOnInit(): void {

    this.loadStudent();
  }

     loadStudent(){
    this.service.getAll().subscribe({
      next: json => this.student = json
   });
  }
  save() {
    this.service.save(this.formGroupStudent.value).subscribe({
      next: json => {
        this.student.push(json);
        this.formGroupStudent.reset()
      }
    })
  }

  delete(student: Student) {
    this.service.delete(student).subscribe(
      {
        next: () => this.loadStudent()
      }
    )
  }

  OnClickUpdate(student: Student) {
    this.isdEditing = true;
    this.formGroupStudent.setValue(student);
    }
    update() {
      this.service.update(this.formGroupStudent.value).subscribe(
        {
          next: () => {
            this.loadStudent();
            this.clear()
          }
        }
      )
      }

      clear() {
        this.isdEditing = false;
        this.formGroupStudent.reset()
        }
}
