import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';

@Injectable()

export class BookService{
    private url = 'http://localhost:3000/books'

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application.json'})
    }

    constructor(private httpClient:HttpClient){}

    getBook():Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.url);
    }
}