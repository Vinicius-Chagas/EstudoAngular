import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id:1,
    conteudo: 'Tu é, mano?',
    autoria: 'Dev',
    modelo: 'modelo3'
 }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    else{
      return 'pensamento-p';
    }
  }
}
