import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { AuthService } from './auth.service';
import { Usuario } from '../interface/auth.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ValidatorService  {


  constructor(){}

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public campoValido( form : FormGroup, campo: string){
    return form.controls[campo].errors && form.controls[campo].touched;
  }

  public contraseñaValida( form: FormGroup, password: string){
    return form.get('password')?.value === password ? true : false;
  }


}
