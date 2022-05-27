import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdmProdutoComponent } from './adm-produto/adm-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ModalAddProdutoComponent } from './adm-produto/modal-add-produto/modal-add-produto.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdmProdutoComponent, ModalAddProdutoComponent, SignupComponent, HomeComponent, HomeUsuarioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
