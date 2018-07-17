import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

     private name: String;
     private username: String;
     private email: String;
     private password: String;
     private age: String;
     private weight: String;
     private goalWeight: String;
     private height: String;
     private activityLevel: String;
     private gender: String;

  constructor(
      private validateService: ValidateService,
      private authService: AuthService,
      private router: Router,
      private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

      const user = {
           name: this.name,
           email: this.email,
           username: this.username,
           password: this.password,
           age: this.age,
           weight: this.weight,
           goalWeight: this.goalWeight,
           height: this.height,
           activityLevel: this.activityLevel,
           gender: this.gender
         };

     // Required Fields
     if (!this.validateService.validateRegister(user)) {
       this.flashMessagesService.show('Please fill out all of the fields.', {
         classes: ['alert-warning'],
         timeout: 3000
       });
       return false;
     }
     // Validate Email
     if (!this.validateService.validateEmail(user.email)) {
       this.flashMessagesService.show('Please use a valid email.', {
         classes: ['alert-warning'],
         timeout: 3000
       });
       return false;
     }

     // Register user
     this.authService.registerUser(user).subscribe(data => {
       if (data.success) {
         this.flashMessagesService.show('You are now registered!', {
           classes: ['alert-success'],
           timeout: 3000
         });
         this.router.navigate(['/dashboard']);
       } else {
         this.flashMessagesService.show('Something went wrong', {
           classes: ['alert-danger'],
           timeout: 3000
         });
         this.router.navigate(['/']);
       }
     });
   }

}
