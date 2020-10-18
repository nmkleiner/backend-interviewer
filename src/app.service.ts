import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public submitForm(form) {
    console.log(form);
  }
}
