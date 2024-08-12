import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  styleClass:string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
    this.styleClass = 'red';
  }

}