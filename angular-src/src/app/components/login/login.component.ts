import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show('You have successfully logged in!', {
          classes: ['alert', 'alert-warning'],
          timeout: 3000
        })
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessagesService.show('Uh-oh, looks ike there was an issue logging in, please try again later.', {
          classes: ['alert', 'alert-warning'],
          timeout: 5000
        })
        this.router.navigate(['/login']);
      }
    });
  }

}
