import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: Object;

  constructor(
      private flashMessagesService: FlashMessagesService,
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
      this.authService.getProfile().subscribe(profile => {
            this.user = profile.user;
          },
          err => {
            console.log(err);
            return false;
          });
  }

}
