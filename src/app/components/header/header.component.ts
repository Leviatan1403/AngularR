import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderC implements OnInit {
  
   public nombre: string;

  constructor() {

      
   }

  ngOnInit(): void {
    this.nombre = 'Hola mundo a todos en esta clase!!!';
  }

}
