import { Component, OnInit } from '@angular/core';
import { FormTransferService } from '../../services/form-transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onNextButtonClick() {
      const name = (<HTMLInputElement>document.getElementById('name')).value;
      const userName = (<HTMLInputElement>document.getElementById('userName')).value;
      const email = (<HTMLInputElement>document.getElementById('email')).value;
      const password = (<HTMLInputElement>document.getElementById('password')).value;

      // Calling FormTransferService to input data
      _formTransferService.setOption('name', this.name);
      _formTransferService.setOption('userName', this.userName);
      _formTransferService.setOption('email', this.email);
      _formTransferService.setOption('password', this.password);

  }
}
