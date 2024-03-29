import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
