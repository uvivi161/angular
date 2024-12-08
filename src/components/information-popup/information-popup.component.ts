import { Component } from '@angular/core';

@Component({
  selector: 'app-information-popup',
  standalone: true,
  imports: [],
  templateUrl: './information-popup.component.html',
  styleUrl: './information-popup.component.css'
})
export class InformationPopupComponent {
  str:string = ""
  Popup(txt: string) {
    this.str = txt;
  }
}
