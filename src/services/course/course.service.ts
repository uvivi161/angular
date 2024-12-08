import { Injectable } from '@angular/core';
import { Course, subject } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [new Course("1","EasyMath",subject.teacher),
    new Course ("2", "3Point",subject.designin),
    new Course ("3", "Hi-Tec",subject.computerPrograming)
  ]
  
  getCourses(){
    return this.courses;
  }

}
