import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentListComponent } from "../components/student-list/student-list.component";
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { FormComponent } from "../components/teachersForm/form/forms/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     //StudentListComponent,
      //FormComponent,
      RouterLink, 
      RouterLinkActive,
      CommonModule,
      //FormComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uvi';
  whatTheTimeNow(){
    let timer = new Date();
    if(timer.getHours() > 22 && timer.getHours() < 5){
        return "good-night";
    }
    if(timer.getHours()> 5 && timer.getHours()<11 ){
      return "good-morning";
    }
    if(timer.getHours()> 11 && timer.getHours()<16 ){
      return "good-noon";
    }
    return "good-evening";
    
  }
}
