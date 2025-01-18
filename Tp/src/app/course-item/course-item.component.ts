import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../Models/courses';

@Component({
  selector: 'app-course-item',
  standalone: false,

  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() courseItem!: { id: number; name: string; description: string };

  @Output() courseSelected = new EventEmitter<string>();

  // Méthode pour émettre un événement
  selectCourse() {
    this.courseSelected.emit(`Le cours sélectionné est : ${this.courseItem.name}`);
  }
}
