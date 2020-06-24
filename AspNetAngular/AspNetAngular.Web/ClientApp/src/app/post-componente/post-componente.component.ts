import { Component, OnInit } from '@angular/core';
import {DatapostService} from "../serv/datapost.service";

@Component({
  selector: 'app-post-componente',
  templateUrl: './post-componente.component.html',
  styleUrls: ['./post-componente.component.css']
})
export class PostComponenteComponent implements OnInit {

  posts = [];

  constructor(private datapostService: DatapostService){
    this.datapostService.getData().subscribe(data =>{
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
