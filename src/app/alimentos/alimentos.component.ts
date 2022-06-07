import { Component, OnInit } from '@angular/core';
import listaAlimentos from 'src/assets/json/alimentos.json';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {
  alimentos:any = listaAlimentos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
