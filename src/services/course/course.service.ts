import { Injectable } from '@angular/core';
import { Course, subject } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses = [new Course("1","EasyMath",subject.teacher,["analiza", "graph", "function"],1),
    new Course ("2", "3Point",subject.designin,["1Point", "2Point", "3Point"],3),
    new Course ("3", "Hi-Tec",subject.computerPrograming,["c++", "angular", "react", "java","LLM","pythons"],4)
  ]
  
  getCourses(){
    return this.courses;
  }

}
