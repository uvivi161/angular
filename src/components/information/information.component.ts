import { Component, ElementRef, ViewChild} from '@angular/core';
import { InformationPopupComponent } from "../information-popup/information-popup.component";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [InformationPopupComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @ViewChild(InformationPopupComponent) child!:InformationPopupComponent;
  @ViewChild('p1') childP! : ElementRef;
  delete() {
    this.childP.nativeElement.innerText = "I change you:)"

    this.child.Popup("are you shure");
  }
}
