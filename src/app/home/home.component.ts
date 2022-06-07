import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotos=[
    {"id":1,"nombre":"home_comida","ruta":"comida_1.jpeg","estado":"active"},
    {"id":2,"nombre":"home_deporte","ruta":"deporte.jpg","estado":""},
    {"id":3,"nombre":"home_pesas","ruta":"pesas.jpg","estado":""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
