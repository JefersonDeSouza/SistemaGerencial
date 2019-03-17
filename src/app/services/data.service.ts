import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { BadInputError } from '../shared/error/bad-input-error';
import { AppError } from '../shared/error/app-error';
import { NotFoundError } from '../shared/error/not-found-error';

@Injectable()
export class DataService {

    private baseUrl = environment.baseUrl;

    constructor(
        private url: string,
        private http: HttpClient) {
    }

    //pegarTodos
    obterTodos(): Observable<any> {
        return this.http.get(this.baseUrl + '' + this.url);
    }

    //pegarPorId
    obterPorId(id: number): Observable<any> {
        return this.http.get(this.baseUrl + '' +this.url + '/' + id);
    }

    //atualizarModel
    atualizar(model: any): Observable<any> {
        return this.http.put(this.baseUrl + '' +this.url, model);
    }

    //deletarPorId
    deletarPorId(id: number): Observable<any> {
        return this.http.delete(this.baseUrl + '' +this.url + '/' + id)
    }

    //criar
    cadastrar(model: any): Observable<any> {
        return this.http.post(this.baseUrl + '' +this.url, model);
    }

    private handlerError(error: Response){
        if(error.status === 400)
            return Observable.throw(new BadInputError(error.json()));

        if(error.status === 404)
            return Observable.throw(new NotFoundError(error.json()));

        return Observable.throw(new AppError(error));
    }
}