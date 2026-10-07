import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hola")
  hola():string{
    return this.appService.hola();
  }

  @Post("/users")
  crear():string{
    return this.appService.crear();

  }

  @Get("/users")
  getusers():string{
    return this.appService.getusers();
  }

  @Get("/users/:id")
  getUnUsuario(@Param('id') id:number):string{
    return this.appService.getUnUsuario(id);
  }

  @Put("/users/:id")
  putUnUsuario(@Param('id') id:number):string{
    return this.appService.putUnUsuario(id);
  }

  @Patch("/users/:id")
  patchUnUsuario(@Param('id') id:number):string{
    return this.appService.patchUnUsuario(id);
  }

   @Delete("/users/:id")
  deleteUnUsuario (@Param('id') id:number):string{
    return this.appService.deleteUnUsuario(id);
  }






}
