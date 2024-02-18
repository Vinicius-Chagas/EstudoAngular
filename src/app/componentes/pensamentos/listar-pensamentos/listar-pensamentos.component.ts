import { Component, Input, OnInit } from '@angular/core';
import { CardPensamentoComponent } from '../card-pensamento/card-pensamento.component';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  constructor(private service: PensamentoService) { }

  listaPensamentos: Array<Pensamento> = [];

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos);


  }

}
