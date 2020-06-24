import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class DatapostService {

  constructor(private httpClient: HttpClient) {
    console.log('service is working333');
  }

getData(){
 return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
}
}
