import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string;
  password: string;

  constructor() {}

  onClick(usuario:  HTMLInputElement, 
          password: HTMLInputElement)
  {
    alert("Usuario es: " + usuario.value + "\nContrasena es: " + password.value)
  }
  
}

