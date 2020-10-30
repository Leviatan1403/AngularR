import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../service/articulo.service';
import { cuentas } from '../../models/cuentas.model';
import { cuentasF } from '../../models/cuentasF.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [CuentasService]
})
export class FormularioComponent implements OnInit {
 public user: any;
 public cuentas: cuentas[];
 public cuentasF: cuentasF[];
  constructor(private _cuentasService: CuentasService) {
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    };
   }

  ngOnInit(): void {
    this._cuentasService.getCuentas(true).subscribe(
      Response => {
        if(Response.articles){
          this.cuentas = Response.articles;
        }else{

        }
      },error => {
        console.log(error);
      }
      
    );
    this._cuentasService.getCuentasF(true).subscribe(
      Response => {
        if(Response.articles){
          this.cuentasF = Response.articles;
        }else{

        }
      },error => {
        console.log(error);
      }
      
    );

    
  }

  onSubmit(){
    alert("Datos Enviados.")
    console.log(this.user);
  }
}
