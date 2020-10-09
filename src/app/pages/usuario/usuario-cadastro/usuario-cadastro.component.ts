import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario} from '../../../models/usuario'
@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  hide = true;
  public usuario:Usuario = new Usuario();
  private autenticate:boolean = false;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public login(usuario:Usuario){
    if(usuario.login == "joao@gmail.com" && usuario.senha == "123456"){
      this.autenticate = true;
      this.router.navigate(['home']);
      alert("Logado com sucesso");
    }
    else if(usuario.login == "maria@gmail.com" && usuario.senha == "54321"){
      this.autenticate = true;
      this.router.navigate(['home']);
      alert("Logado com sucesso");
    }
    else if(usuario.login == "carlos@gmail.com" && usuario.senha == "987654"){
      this.autenticate = true;
      this.router.navigate(['home']);
      alert("Logado com sucesso");
    }
    else{
      alert('Não cadastrado')
    }
  }
  public logar(){
    this.login(this.usuario);
  }

}
