import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {environment} from "../../environments/environment";




const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor ( private http: HttpClient ) {
  }

    getAllBooks(): Observable<Book[]> {
      return  this.http.get<Book[]>(API_URL + '/books/');
    }

    getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + '/books/' + id);
    }

    createBook(book: Book): Observable<any>{
    return this.http.post(API_URL + '/books/', book);
    }

    deleteBook(id: number): Observable<any> {
    return  this.http.delete(API_URL + '/books/' +id);
    }

    updateBook(id: number, book: Book): Observable<any> {
    return  this.http.put<Book>(API_URL + '/books/' +id, book );
    }

}

