import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  jugadores: any[] = [];

  ngOnInit() {

    const data = localStorage.getItem('jugadores');

    if (data) {
      this.jugadores = JSON.parse(data);
    }

  }

  enviar(form: any) {

    if (form.invalid) return;

    const jugador = {

      nick: this.nombre,
      juego: this.email,
      nivel: this.mensaje

    };

    // Guardar en array
    this.jugadores.push(jugador);

    // Guardar en localStorage
    localStorage.setItem(
      'jugadores',
      JSON.stringify(this.jugadores)
    );

    // Limpiar formulario
    form.reset();

  }

}

