import { Component, Input } from '@angular/core';
import { Course } from '../../models/Course';
import { CourseService } from '../../services/course/course.service';
import { colors } from '../../directive/colors.directive';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [colors],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  @Input() isPaied! : Boolean
  courses : Course[] =  [];
  //color = "pink"

  constructor(private courseService : CourseService) { 
    this.courses = this.courseService.getCourses();
  }
}
