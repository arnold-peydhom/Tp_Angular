import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../Models/courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: { id: number; name: string; description: string }[] = [
    { id: 1, name: 'Angular Basics', description: 'apprendre Angular Basics' },
    { id: 2, name: 'Angular avancee', description: 'apprendre Angular avancee' },
    { id: 3, name: 'RxJS et Observables', description: 'apprendre RxJS et Observables' }
  ];

  constructor() { }

  getCourses(){
    return this.courses;
  }
}
