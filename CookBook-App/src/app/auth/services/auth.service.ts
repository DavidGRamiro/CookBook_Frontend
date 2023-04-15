import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // Aqui se debe de implementar el servicio de auntenticación del usuario, registro y logout
  // Haremos una llamada a la api en localhost a través de httpClient y gestionaremos los diferentes métodos.
  // Como son verificar, login y logout.

  //Como este es nuestro servicio propio de Auth, no tiene nada que ver con los demás, tendremos que inyectar y crear
  // variables específicas para este servicio.

  // constructor( private :http: HttpClient){} . Es esencial, ya que no podremos acceder a los metodos HTTP. como son GET POST PUT.
  // Dentro de este serviocio, gestionaremos todas las peticiones que tengan que ver con la autenticación de usuarios.

  //PJ: login(user : Usuario){ this.http.get('http://localhost:8080/api/auth/login', user) }
  //PJ: darAltaUsuario( user: Usuario){ this.http.post('http://localhost:8080/api/auth/alta', user )}

  //Aqui se puede refactorizar mucho, por ejemplo, definir una constante que no va a cambiar.
  // const endPoint: string = 'http://localhost:8080/api/auth';
  // y en la petición sería : this.http.get(`${ endPoint } /.....`)

  // Por último, los servicios no se importan ni se exporta. Es global a toda la app. Arriba del todo,
  // si nos fijamos, en el decorador Injectable, provideIn: root, eso significa que podemos hacer uso de este servicio en cualquier compoennte,
  //  pero NO es recomendado, ya q perderíamos el sentido de la modularidad. Hay que utilizar solo los métodos que se vayan a usar dentro la
  // directiva AUTH y a sus componentes.

  constructor() { }

}
