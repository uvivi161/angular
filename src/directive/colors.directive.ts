import { Directive, ElementRef, Input } from '@angular/core';
import { Course, subject } from '../models/Course';

@Directive({
  selector: '[colors]',
  standalone: true
})
export class colors {
  
  //@Input() course!: Course;
  c = '';

  constructor(private el: ElementRef) { }
  
  private changeColor(){
    const c = this.color()
    this.el.nativeElement.style.backgroundColor = c;
  }
  ngOnInit(): void {
    this.changeColor();
  }

  color() {
    const sb =this.el.nativeElement.subject;
    switch (sb) {
      case subject.computerPrograming:
        return this.c= "pink";
      case (subject.designin):
        return this.c = "lightBlue";
      case (subject.teacher):
        return this.c = "yellow";
      default: return "white";

    }
  }

}
