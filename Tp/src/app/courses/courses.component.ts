import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesName:string = 'Angular avancee';
  isDisable:boolean = true;
  courseDescription:string = '';

  startCourse():void {
    return alert("le cour commence!")
  }

  courses = ["cour_1", "cour_2", "cour_3", "cour_4",];
}
