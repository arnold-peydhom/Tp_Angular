import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesName = 'Angular avancee';
  isDisable = true;

  startCourse():void {
    return alert("le cour commence!")
  }
}
