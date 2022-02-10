import { Component, OnInit } from '@angular/core';
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:number;
  public new_user:any;

  constructor(
    private _peticionesService: PeticionesService,
  ) { 
    this.userId=1;
    this.new_user={
        "name": "",
        "job": ""
    }
  }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      //(x) => console.log(x)
      resul=>{
        this.user=resul.data;
      },
      error=>{
        console.log(<any> error)
      }
    )
  }

  onSubmit(form:any){
    this._peticionesService.addUser(this.new_user).subscribe(
      response=>{
        console.log(response);
        form.reset();
      },
      error=>{
        console.log(<any>error)
      }
    )

  }

}
