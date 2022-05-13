import { Component, OnInit } from '@angular/core';
// import { ModalAddProdutoComponent } from 'modal-add-produto.component.ts';
import { ModalAddProdutoComponent } from './modal-add-produto/modal-add-produto.component';

@Component({
  selector: 'app-adm-produto',
  templateUrl: './adm-produto.component.html',
  styleUrls: ['./adm-produto.component.scss'],
})
export class AdmProdutoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  modal = true;

  openModal() {
    this.modal = !this.modal;
  }
}
