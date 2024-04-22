import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  helloBridge(){
    return "Hello BRIDGE!!!"
  }

  @Get(':id')
  getListaOfPrimoNumbers(@Param('id') id:number) {
    return this.appService.checkNumberOfEvenNumbers(id)
  }
}
