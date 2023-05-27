import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {

  public msg1 = '¿ Cómo puedo buscar una receta en la aplicación ?'
  public msg2 = '¿ Puedo guardar mis recetas favoritas en la aplicación ?'
  public msg3 = '¿ La aplicación ofrece opciones de recetas para personas con restricciones dietéticas?'
  public msg4 = '¿ Puedo descargar las recetas en mi ordenador ?'
  public msg5 = '¿ Qué debo hacer si tengo alguna pregunta o problema con la aplicación ?'


  public res1 = 'Puedes acudir acudir directamente a la sección Recetas, en el menú superior, o desde la pagína principal, encontrarás un enlace directo a todas las recetas.'
  public res2 = ' ¡Sí! Puedes guardar tus recetas favaoritas para acceder facilmente a ellas más tarde. Solo necesitas hacer clic en el botón de añadir a favoritos que encontrarás en cada receta. De esta manera, podrás organizar tus recetas preferidas en un solo lugar'
  public res3 = 'Absolutamente. Reconocemos la importancia de las preferencias y de las restricciones dietéticas, por lo que nuestra aplicación ofrece categorías especiales como opciones vegatarianas, ceganas, o especiales para alérgenos.'
  public res4 = '¡Por supuesto! Nuestra web te permite descargar las recetas para compartirla con tus amigos y familiares. Accede al botón de compartir en cada una de las recetas, y podrás descargarla en tu ordenador para tener acceso a ella donde y cuando quieras'
  public res5 = 'Estamos aquí para ayudarte. SI tienes alguna pregunta, problema técnico o sugerencia, puedes ponerte en contacto con nuestro equipo de soporte. Simplemente, accede al apartado de contacto que esta en la secciñon "Sobre nosotros" para que nos pueda llegar cuanlquier duda que tengas relacionada con la web. Intentaremos reponderte lo mas rápido posible.'

}
