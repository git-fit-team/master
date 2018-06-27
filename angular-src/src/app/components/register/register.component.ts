import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onNextButtonClick() {
      const name = document.getElementById('name');
      console.log(name);
      const userName = document.getElementById('userName');
      console.log(userName);
      const email = document.getElementById('email');
      console.log(email);
      const password = document.getElementById('password');
      console.log(password);
  }

  CallClick(): any {
      console.log('clicked');
  }
  
}
