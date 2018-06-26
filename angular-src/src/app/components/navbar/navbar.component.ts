import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private flashMessagesService: FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are now logged out', {
      classes: ['alert-success'],
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }  

}
