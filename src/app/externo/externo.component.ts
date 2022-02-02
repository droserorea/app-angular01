import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public user:any;

  constructor(
    public _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      //(x) => console.log(x)
      resul=>{
        this.user=resul.data;
      },
      error=>{
        console.log(<any> error)
      }
    )
  }

}
