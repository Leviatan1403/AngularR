import { Component, OnInit } from '@angular/core';
//import { CuentasService } from '../../service/articulo.service';
//import { cuentas } from '../../models/cuentas.model';
import { cuentasF } from '../../models/cuentasF.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [CuentasService]
})
export class FormularioComponent implements OnInit {
 public user: any;
 //public cuentas: cuentas[];
 public cuentasF: cuentasF[];
  constructor() {
    this.user = {
      nombre: '',
      apellido: '',
      bio: '',
      genero: ''
    };
   }

  ngOnInit(): void {
    

    
  }

  onSubmit(){
    alert("Datos Enviados.")
    console.log(this.user);
  }
}
