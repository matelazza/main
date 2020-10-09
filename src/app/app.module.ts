import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { CadastroVeiculoComponent } from './pages/veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { PesquisaVeiculoComponent } from './pages/veiculo/pesquisa-veiculo/pesquisa-veiculo.component';
import { CadastroAcessorioComponent } from './pages/acessorio/cadastro-acessorio/cadastro-acessorio.component';
import { PesquisaAcessorioComponent } from './pages/acessorio/pesquisa-acessorio/pesquisa-acessorio.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent,
    CadastroVeiculoComponent,
    PesquisaVeiculoComponent,
    CadastroAcessorioComponent,
    PesquisaAcessorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
