import { Injectable } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ValidatorService  {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);


  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  setLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }


  public campoValido( form : FormGroup, campo: string){
    return form.controls[campo].errors && form.controls[campo].touched;
  }
}
