import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'about', component: AboutComponent }
];
