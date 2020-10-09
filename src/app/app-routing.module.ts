import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAcessorioComponent } from './pages/acessorio/cadastro-acessorio/cadastro-acessorio.component';
import { PesquisaAcessorioComponent } from './pages/acessorio/pesquisa-acessorio/pesquisa-acessorio.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './pages/usuario/usuario-pesquisa/usuario-pesquisa.component';
import { CadastroVeiculoComponent } from './pages/veiculo/cadastro-veiculo/cadastro-veiculo.component';
import { PesquisaVeiculoComponent } from './pages/veiculo/pesquisa-veiculo/pesquisa-veiculo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'usuario/cadastro',
    pathMatch:"full"
  },
  {
    path:'usuario/usuario-cadastro',
    component : UsuarioCadastroComponent
  },
  {
    path:'usuario/usuario-pesquisa',
    component: UsuarioPesquisaComponent
  },
  {
    path:'veiculo/cadastro',
    component: CadastroVeiculoComponent
  },
  {
    path:'veiculo/pesquisa',
    component: PesquisaVeiculoComponent
  },
  {
    path:'acessorio/cadastro',
    component: CadastroAcessorioComponent
  },
  {
    path:'acessorio/pesquisa',
    component: PesquisaAcessorioComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
