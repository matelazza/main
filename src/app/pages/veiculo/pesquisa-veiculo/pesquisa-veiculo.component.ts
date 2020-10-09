import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo';

@Component({
  selector: 'app-pesquisa-veiculo',
  templateUrl: './pesquisa-veiculo.component.html',
  styleUrls: ['./pesquisa-veiculo.component.scss']
})
export class PesquisaVeiculoComponent implements OnInit {
 
  public veiculos:Veiculo[] = [];
  public dataSource:MatTableDataSource<Veiculo> = new MatTableDataSource(this.veiculos);
  public displayedColumns:String[] = ['modelo', 'cor', 'anoFabricacao' ,'placa' , 'valor','acoes'];
  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('veiculos');
    if(jsonUsers != null){
      this.veiculos = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.veiculos);
  }
  public remover(veiculo){
    console.log('Removendo o Veiculo',veiculo);
    let index = this.veiculos.indexOf(veiculo);
    this.veiculos.splice(index,1);
    localStorage.setItem('veiculos',JSON.stringify(this.veiculos));
    this.dataSource = new MatTableDataSource(this.veiculos);
  }
  public alterar(veiculo){
    console.log('Alterando o veiculo',veiculo);
    this.router.navigate(['/veiculo/cadastro',veiculo]);
  }
  }
