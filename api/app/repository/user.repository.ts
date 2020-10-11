import { User } from './../models/user.model';
import { UserCreateInput } from '@prisma/client';

export  const createUser = async (
  inputUser:  UserCreateInput
  ) => {
    const newUser = await User.create({
      data:{
        ...inputUser
      }
    })
    return newUser
  }
  

/**
 * 1 - Crear un módulo de conexión con el servidor 
 *  Recibir un URL base
 *  Recibir una Lista de funciones (viene de un archivo de parámetros)
 *   [ 
 *    [<nombreFuncion>, <tipoSolicitud>, ?[<variables> => <valor>]],
 *    (EXAMPLE) [eliminarPublicacion, POST, id=1],
 *    (EXAMPLE) [obtenerUsuarios, GET]
 *  ]
 * 
 * 2 - Renderizar información
 *  Crear una función que recibe un objeto
 *  Objeto recibido tiene pares key=>value
 *  Crear un "template" for por las propiedades del objeto
 *  render <template>
 *    <div> -> <label name/id=>key> -> <input value=>value> -> </div>
 * 
 * 3 - Crear formulario *****
 * 
 * list<T>( id?: string, field_name?: string )
 * { if( id != null && field_name != null )
 * { //console.log(${apiURL}/${this.type}/list?${field_name}=${id}); 
 * return this.http.get<T>(${apiURL}/${this.type}/list?${field_name}=${id}, {headers} ); } 
 * else{ return this.http.get<T>(${apiURL}/${this.type}/list, {headers}); } }
 *  get<T>( id: number, field_name: string ){ return this.http.get<T>(${apiURL}/${this.type}/get?${field_name}=${id}, {headers}); } create<T>( model ){ return this.http.post<T>(${apiURL}/${this.type}/save, model, {headers}); } update<T>( model ){ return this.http.patch<T>(${apiURL}/${this.type}/update, model, {headers}); } remove<T>( id: number ){ return this.http.delete<T>(${apiURL}/${this.type}/delete, {headers}); }
 */
