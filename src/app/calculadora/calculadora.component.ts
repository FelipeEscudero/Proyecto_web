import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  public imc:FormGroup;
  constructor(public FormB:FormBuilder) {
    this.imc=this.FormB.group({
      peso: ["", Validators.required],
      estatura: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }
  calcular(){
    return ((this.imc.get("peso")?.value) / (((this.imc.get("estatura")?.value )/100)**2));
  }
}
