import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/User';
import { HttpClientModule } from '@angular/common/http'; // ייבוא HttpClientModule

@Component({
  selector: 'app-dot-net',
  standalone: true,
  imports: [JsonPipe, AsyncPipe,HttpClientModule],
  providers:[UserService],
  templateUrl: './dot-net.component.html',
  styleUrl: './dot-net.component.css'
})
export class DotNetComponent implements OnInit{
  
  constructor(public userService: UserService){}
  
  ngOnInit(): void{
    this.userService.getUsers();
  }

}
