import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillasService{
    public zapatillas: Array<Zapatilla>

    constructor(){
        this.zapatillas=[
            new Zapatilla('ztp patito','patito','negro',32.36,true),
            new Zapatilla('ztp patito','black','azul',333.36,true),
            new Zapatilla('ztp blue','patito','negro',32.36,true),
            new Zapatilla('ztp blue','holdme','negro',32.36,true)
        ]
    }

    getTexto(){
        return " Desde un servicio hola !!";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}