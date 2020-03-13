import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
import { config } from 'rxjs';

//decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title Angular Variable';
  public config;

  constructor(){
    this.title = Configuracion.titulo;
    this.config = Configuracion; //contiene todo el objeto
  }
}
