import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-usuarios',
  templateUrl: './ingreso-usuarios.page.html',
  styleUrls: ['./ingreso-usuarios.page.scss'],
})
export class IngresoUsuariosPage implements OnInit {
  rut: number;
  usuario: string;
  password: string;
  
  constructor() { }

  ngOnInit() {
  }

  onClick(regrut:      HTMLInputElement,
          regusuario:  HTMLInputElement,
          regpassword: HTMLInputElement)
          {
            alert("RUT es: " + regrut.value +
                  "\nUsuario es: " + regusuario.value + 
                  "\nContrasena es: " + regpassword.value)
          }
}
