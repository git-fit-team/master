import { Injectable } from '@angular/core';

@Injectable()
export class FormTransferService {

      private config = {};

      setOption(option, value) {
          this.config[option] = value;
      }

      getConfig() {
          return this.config;
      }

  constructor() { }

}
