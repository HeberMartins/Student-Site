import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Course} from '../course';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coursers',
  standalone: false,
  templateUrl: './coursers.component.html',
  styleUrl: './coursers.component.css'
})
export class CoursersComponent implements OnInit {

    course: Course[] = [];
    formGroupCourse : FormGroup;
  
  
    constructor(private service: CourseService, 
                  private formBuilder: FormBuilder
    ) {
  
      this.formGroupCourse = this.formBuilder.group({
        id : [''],
        name: [''],
        price: [''],
        active: ['Desativo'],
        promotion: [true]
      }) 
     }
  
    ngOnInit(): void {
      this.service.getCourse().subscribe({
         next: json => this.course = json
      });
   }
   save() {
   this.service.saveCourse(this.formGroupCourse.value).subscribe({
     next: json => {this.course.push(json);
      this.formGroupCourse.reset({
        active: 'Desativo', 
        promotion: true
      });
    }
   }) 
  }


}
