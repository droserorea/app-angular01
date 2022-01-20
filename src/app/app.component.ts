import { Component } from '@angular/core';
import { configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app-angular01';
  public descripcion: string;
  public mostrar_videojuegos: boolean=true;
  public config;

  constructor(){
    this.config=configuracion;
    this.title=configuracion.titulo;
    this.descripcion=configuracion.descripcion;
    console.log(this.title);
  }
  ocultarVideojuegos(valor: boolean){
    this.mostrar_videojuegos= valor;
  }
}
