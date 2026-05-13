import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ FormsModule, RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
 usuario: string = '';
 password: string = '';
 error: string= '';

 constructor (private router: Router) {}

 login() {
  if (this.usuario==='super'  && this.password === '1212') {
    this.error = '';
    this.router.navigate(['/contacto']);
    
  }else{
    this.error = 'usuario o contraseña incorrecto';
  }
 }
}
