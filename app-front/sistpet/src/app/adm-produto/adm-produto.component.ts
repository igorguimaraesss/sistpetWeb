import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-produto',
  templateUrl: './adm-produto.component.html',
  styleUrls: ['./adm-produto.component.scss'],
})
export class AdmProdutoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  modal = true;

  // openModal() {
  //   this.modal = !this.modal;
  // }

  goToLogin() {
    this.router.navigate(['/modal-add-produto']);
  }
}
