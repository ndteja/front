import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name= 'teja';
    this.age= 20;
    this.hobbies=['writing', 'watching', 'talking'];
  }
  onClick(hobby){
    console.log('clicked');
    if(hobby !='')this.hobbies.unshift(hobby);
    return false;
  }
  addHobby(hobby){
    console.log(hobby);
   if(hobby !='') this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}