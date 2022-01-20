import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public zapatillas: Array<Zapatilla>;
    public marcas:String[];

    constructor(){
        console.log("componente zapatilla");
        this.marcas= new Array();
        this.zapatillas=[
            new Zapatilla('ztp patito','patito','negro',32.36,true),
            new Zapatilla('ztp patito','black','azul',333.36,true),
            new Zapatilla('ztp blue','patito','negro',32.36,true),
            new Zapatilla('ztp blue','holdme','negro',32.36,true)
        ]
    }

    ngOnInit(){
        console.log(this.zapatillas)
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca)
            }
        });
        console.log(this.marcas);
    }
}