import { Component } from '@angular/core';
import { TeacherService } from '../../../services/course/teacher/teacher.service';
import { Teacher } from '../../../models/Teacher';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UseIconPipeComponent } from "../../use-icon-pipe/use-icon-pipe.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, UseIconPipeComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  teachers:Teacher[] =[];
  teach : Teacher= new Teacher(9999,"ttttttttttttt",["c1","c4"]);
  teach1 : Teacher= new Teacher(9999,"ttttttttttttt",["c1","c4"]);

  constructor(private teacherService :TeacherService) {
    this.teachers= teacherService.getTeachers();
  }
  onSubmitAdd() {  
    this.teacherService.addTeacher(this.teach.name, this.teach.classes);
  }
  onSubmitUpdate(){
    this.teacherService.updateTeacher(this.teach.ID, this.teach.classes)
  }
  isUpdate :boolean = false;
  isAdd :boolean = false;
  update(){
    this.isUpdate = true;
  }
  add(){
    this.isAdd=true;
  }
}
