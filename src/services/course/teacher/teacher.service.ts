import { Injectable } from '@angular/core';
import { Teacher } from '../../../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  
  private teachers = [new Teacher(1, "chana",["v5"]),
  new Teacher(2, "chya",  ["d8"]),
  new Teacher(3, "efrat", ["a1"])
  ]

  index: number =  4;
  getTeachers() {
    return this.teachers;
  }
  
  get(name : string){
    const t = this.teachers.find(teacher => teacher.name === name);
    return t;
  } 

  addTeacher(name: string, cl: string[]) {
    const teacher = new Teacher(this.index++,name,cl);
    this.teachers.push(teacher);
  }

  updateTeacher(id: number, cl: string[]) {
    const id_num : number = Number(id);
    const teacherIndex = this.teachers.findIndex(t => t.ID === id_num);
    if (teacherIndex != -1) {
      // עדכון ישיר של הכיתות של המורה
      this.teachers[teacherIndex] = {
        ...this.teachers[teacherIndex], // שמירה על הפרטים האחרים של המורה
        classes: cl,            // עדכון הכיתות
      };
    }
    else{
      console.log("update failed");      
    }
  }

  deleteTeacher(teacher: Teacher) {
    const temp = this.teachers.filter(t => t !== teacher);
    this.teachers = temp;
  }

}
