import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo= "titulo con this para componente";
        this.listado="listado d e juegos "
        console.log("Se cargo el componente");
    }
    ngOnInit() {
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("Docheck");
    }
    
    ngOnDestroy(){
         console.log("On destroy hook")
    }

    cambiarTitulo(){
        this.titulo="cambiar titutlo******";
    }
} 