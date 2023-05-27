import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  formContacto!: FormGroup;

  constructor( private _form : FormBuilder,
              private _msg : MessageService){}

  ngOnInit(): void {
    this.formContacto = this._form.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      texto: ['', Validators.required]
    })
  }

  mostrarNotificacion(){
    this.formContacto.markAllAsTouched();
    if(this.formContacto.valid){
      this._msg.add({ severity:'success', summary:' ¡ Lo tenemos !', detail: 'Gracias por ponete en contacto con nosotros.' })
      this.formContacto.reset()
    }else
    this._msg.add({ severity:'error', summary:'No hemos recibido tu mensaje', detail: 'Prueba a ponerte de nuevo en contacto con nosotros' })

  }


}
