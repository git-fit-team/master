import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService:AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill in all of the fields.', {
        classes: ['bg-info'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      return false;
    }
    
    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      alert("Please use a valid email");
      return false;
    }
    console.log('about to register');
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        alert("You are now registered!");
        this.router.navigate(['/dashboard']);
      } else {
        alert("Something went wrong");
        this.router.navigate(['/']);
      }
    });

  }

}