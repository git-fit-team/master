import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FormTransferService {
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

      public form = [
            'name',
            'username',
            'email',
            'password'
      ];

      setOption(option, value) {
           this.form[option] = value;
      }

      getForm() {
          console.log('works');
          console.log(this.form);
          return this.form;
      }

  constructor() {
      this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) {
      console.log(data);
      this.myMethodSubject.next(data);
  }

}
