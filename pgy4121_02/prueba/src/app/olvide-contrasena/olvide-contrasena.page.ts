import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.page.html',
  styleUrls: ['./olvide-contrasena.page.scss'],
})
export class OlvideContrasenaPage implements OnInit {
  rut: number;
  usuario: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(olvrut:      HTMLInputElement,
    olvusuario:  HTMLInputElement)
    {
      alert("RUT es: " + olvrut.value +
            "\nUsuario es: " + olvusuario.value)
    }

}
