import { Component } from '@angular/core';
import { IconsPipe } from '../../pipes/icons.pipe';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-use-icon-pipe',
  standalone: true,
  imports:  [IconsPipe,FormsModule],
  templateUrl: './use-icon-pipe.component.html',
  styleUrl: './use-icon-pipe.component.css'
})
export class UseIconPipeComponent {
  userInput: string='';
}
