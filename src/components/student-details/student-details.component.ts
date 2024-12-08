import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/Student';
import { InformationPopupComponent } from "../information-popup/information-popup.component";
import { InformationComponent } from "../information/information.component";

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [InformationPopupComponent, InformationComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  student!: Student;
  @Input () id: number =0;
  @Input () list:Student[] = [];
adress: any;
  
  showDetails(){
    let index = this.list.findIndex((student) => student.ID == this.id);
    return this.list[index];
  }
  
  @Output() onSaveDetails : EventEmitter<any> = new EventEmitter<any>();
  saveDetails(id: string, name:string, adress: string,avg:string, phone:string, pay:string){
   const id_num : number = Number(id);
   const avg_num : number = Number(avg);
   const pay_bool : boolean = Boolean(pay)
    this.student = new Student(id_num,name,adress,phone,true,new Date(),avg_num,pay_bool);
    this.onSaveDetails.emit(this.student);
  }
}