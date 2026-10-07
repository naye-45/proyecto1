import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  hola():string{
    return 'esta escrito en español'
  }

  crear():string{
    return 'Esto crea un usuario'
  }

  getusers():string{
    return 'Esto devuelve todos los usuarios'
  }
  getUnUsuario(id:number):string{
    return `Esto devuelve el usuario ${id}`
  }
  putUnUsuario(id:number):string{
    return `Actualiza todo el usuario ${id}`
  }
  patchUnUsuario(id:number):string{
    return `Parcha un usuario ${id}`
  }
  deleteUnUsuario(id:number):string{
    return `elimina un usuario ${id}`
  }
  


}
