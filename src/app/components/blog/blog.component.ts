import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params} from '@angular/router';
import { telefono } from '../../models/telefono.model';
import { ArticleService } from '../../service/articulo.service';
import { article } from '../../models/cuentas.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService] //esto es para incluir el servicio en mi componente
})
export class BlogComponent implements OnInit {
  
  public nombre: string;
  public mensaje: string;
  public telefonos: telefono[];
  public date: any;
  public resultado: article[];

  constructor(
    private _route: ActivatedRoute,
    private _articleService: ArticleService
  ) { 
    this.mensaje = "No hay parametros en la URL!!!";

    this.telefonos = [
      new telefono ("Samsung", "S20", "20 Megapixeles", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/02/samsung-galaxy-s20-opinion-1861413.jpg?itok=5hMxasVa"),
      new telefono ("Motorola", "E5", "15 Megapixeles", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/06/nuevos-motorola-moto-e5-moto-e5-plus-ya-venta-espana.jpg?itok=lWLOVNuR0"),
      new telefono ("Xiaomi", "Remi", "1 Megapixele","https://i.blogs.es/3d3e14/xiaomi-redmi-note-9-pro-00-01/840_560.jpg")
    ];

    this.date = new Date(2020, 9, 19);

  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) =>{
        this.nombre = params.nombre;
    });

    this._articleService.getArticles(true)

    console.log(this.nombre);
    console.log(this.telefonos);
  }

}
