import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Veiculo} from '../../../models/veiculo'

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.scss']
})
export class CadastroVeiculoComponent implements OnInit {

  public veiculo:Veiculo = new Veiculo();
  public form:FormGroup = new FormGroup(
    {
    modelo: new FormControl(''),
    cor: new FormControl(),
    anoFabricacao: new FormControl(),
    placa: new FormControl(),
    valor: new FormControl(),
    })

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.veiculo = params as Veiculo;
      this.form.patchValue(this.veiculo);
    })
  }
  public adicionar(){
    if(this.form.invalid){
      alert('Campos invalidos')
      return;
    }
    this.veiculo = this.form.value;
    console.log('Veiculo', this.veiculo);
    let jsonUsers = localStorage.getItem('veiculos');
    let veiculos:Veiculo[] = [];
    if(jsonUsers !=null){
      veiculos = JSON.parse(jsonUsers);
    }
    veiculos.push(this.veiculo);
    localStorage.setItem('veiculos',JSON.stringify(veiculos));
    console.table(veiculos);
    alert("Salvo com Sucesso")
    this.form.reset();
  }
}
