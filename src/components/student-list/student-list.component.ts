import { Component } from '@angular/core';
import { Student } from '../../models/Student';
import { StudentDetailsComponent } from "../student-details/student-details.component";
import { NgTemplateOutlet } from '@angular/common';
import { CourseComponent } from "../course/course.component";
import { InformationComponent } from "../information/information.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent, NgTemplateOutlet, CourseComponent],
  templateUrl: './student-list.component.html',
  //styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  listOfStudent: Student[] = [
    new Student(1, "uvi vinograd", "rainess 14", "0527169161", true, new Date(), 100, true),
    new Student(2, "tamar levi", "rainess 14", "0527169161", false, new Date(), 100, true),
    new Student(3, "racheli choen", "rainess 14", "0527169161", true, new Date(), 100, false),
  ];
  selected: number = 0;
  //id: any;
  show(id: number) {
    this.selected = id;
  }
  add() {
    this.selected = -1
  }
  saving(student: Student) {
    console.log("parent1");
    if (this.listOfStudent.findIndex(s => s.ID === student.ID) === -1)
      this.listOfStudent.push(student);
    else
    this.listOfStudent = this.listOfStudent.map(s => s.ID === student.ID ? student : s)
  }
savingNew(student: Student) {
  console.log("parent2");
  this.listOfStudent.push(student);
}

  //isPaied: Boolean = false;
  isShow: Boolean = false;


  openCourses(student : Student){
    student.show = true;
  }  
}

