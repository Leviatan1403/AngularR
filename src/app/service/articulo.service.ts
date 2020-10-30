import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { direccion } from '../service/direccion';

@Injectable()

export class ArticleService{
    public url: string;
    constructor(
        private _http: HttpClient
        ){
        this.url = direccion.urls;
    }

    getArticles(last: any = null):Observable<any>{
        var articles = 'articles';

        if(last != null){
            var articles = 'articles/true';
        }
        return this._http.get(this.url + articles)
    }
}