import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trab';

  constructor(public router:Router){}  

  public show():boolean{
    return this.router.url.indexOf('login') < 0;
  }
  public logout(){
    localStorage.removeItem('login');
    this.router.navigate(['usuario/usuario-cadastro'])
    console.log('deslogando');
  }
  
}
