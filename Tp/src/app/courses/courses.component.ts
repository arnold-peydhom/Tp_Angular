import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Courses } from '../Models/courses';

@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  course: Courses[] = [];

  coursesName:string = 'Angular avancee';
  isDisable:boolean = true;
  courseDescription:string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.course = this.courseService.getCourses();
  }

  startCourse():void {
    return alert("le cour commence!")
  }
  //courses = ["cour_1", "cour_2", "cour_3", "cour_4",];
}
