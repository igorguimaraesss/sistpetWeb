import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalAddProdutoComponent } from './adm-produto/modal-add-produto/modal-add-produto.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'modal-add-produto', component: ModalAddProdutoComponent },
  { path: 'home/:parametro', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
