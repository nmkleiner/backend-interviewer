import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post('submit-form')
  submitForm(@Body('form') form) {
    return this.appService.submitForm(form);
  }
}
