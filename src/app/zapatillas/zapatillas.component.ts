import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public zapatillas: Array<Zapatilla>;
    public marcas:String[];
    public color: string;
    public mi_marca: string;

    constructor(){
        console.log("componente zapatilla");
        this.mi_marca='';
        this.color= 'blue';
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

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    deleteMarca(index: number){
        // delete this.marcas[index]; //se convierte en undefined
        this.marcas.splice(index,1)
    }

    onBlur(){
        console.log("on-blur look this");
    }

    show(){
        alert(this.mi_marca);
    }

}