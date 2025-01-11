import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Teacher } from '../../../../../models/Teacher';
import { log } from 'console';
import { TeacherService } from '../../../../../services/teacher/teacher.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  teachers: Teacher[] = [];
  teach: Teacher = new Teacher(9999, "ttttttttttttt", []);
  teach1: Teacher = new Teacher(9999, "ttttttttttttt", []);

  addClass: boolean = false;
  @Input() teacher!: Teacher;
  teachersForm!: FormGroup;
  booleanForm!: FormGroup;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {
    this.booleanForm = this.fb.group({ booleanValue: [true] });
    this.teachers = teacherService.getTeachers();
  }

  changeAddClass(b: boolean) {
    this.addClass = b;
  }


  get f(): { [key: string]: AbstractControl } {
    return this.teachersForm.controls;
  }

  ngOnInit(): void {
    this.teachersForm = this.fb.group({
      teacherName: [''],
      classes: ['']
    })
  }


  onSubmit() {
    this.teacherService.addTeacher(this.teach.name, this.teach.classes);
  }

  isUpdate: boolean = false;
  isAdd: boolean = false;

  update() {
    this.isUpdate = true;
  }
  add() {
    this.isAdd = true;
  }
  // onSubmitClass(){
  //   const t = this.teacherService.get(this.teachersForm.get('teacherName')?.value)
  //   t!.classes = this.teachersForm.get('classes')?.value;
  //   console.log("הוספת כיתה")
  // }

  // onSubmitClass() {
  //   const teacherName = this.teachersForm.get('teacherName')?.value; // שם המורה
  //   const newClass = this.teachersForm.get('classes')?.value; // כיתה חדשה

  //   if (!teacherName || !newClass) {
  //     console.error('שם מורה או כיתה אינם תקינים');
  //     return;
  //   }

  //   const teacher = this.teacherService.get(teacherName); // שליפת המורה לפי שם
  //   if (!teacher) {
  //     console.error('מורה לא נמצא');
  //     return;
  //   }

  //   // הוספת הכיתה למערך הקיים של המורה
  //   if (!teacher.classes.includes(newClass)) {
  //     teacher.classes.push(newClass); // ניתן לשפר לשימוש במערך אם השדה הוא מערך
  //   } else {
  //     console.warn('כיתה כבר קיימת');
  //   }

  //   console.log(`הוספת כיתה ${newClass} למורה ${teacherName}`);
  // }

  onSubmitClass() {
    const teacherName = this.teachersForm.get('teacherName')?.value; // שם המורה
    const newClass = this.teachersForm.get('classes')?.value; // הכיתה החדשה

    if (!teacherName || !newClass) {
      console.error('שם מורה או כיתה אינם תקינים');
      return;
    }

    // // מציאת המורה לפי השם מתוך המערך הקיים
     const teacherIndex = this.teachers.findIndex(t => t.name === teacherName);

    // if (teacherIndex === -1) {
    //   console.error(`מורה בשם ${teacherName} לא נמצאה`);
    //   return;
    // }

    // קבלת המורה מהרשימה
    //const teacher = this.teachers[teacherIndex];

    // let teacher !:Teacher ;
    const teacher = this.teacherService.get(teacherName);

    // בדיקה אם הכיתה כבר קיימת
    if (teacher) {
      if (teacher.classes.includes(newClass)) {
        console.warn(`כיתה ${newClass} כבר קיימת למורה ${teacherName}`);
        return;
      }

      // הוספת הכיתה למערך הכיתות של המורה
      teacher.classes = [...teacher.classes, newClass]; // יצירת מערך חדש עם הכיתה החדשה

      // עדכון הרשימה (זה יגרום ל-Angular לזהות שינוי בתצוגה)
      this.teachers[teacherIndex] = { ...teacher };

      console.log(`כיתה ${newClass} נוספה למורה ${teacherName}`);
    }

  }


}
