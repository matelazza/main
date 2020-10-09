import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAcessorioComponent } from './cadastro-acessorio.component';

describe('CadastroAcessorioComponent', () => {
  let component: CadastroAcessorioComponent;
  let fixture: ComponentFixture<CadastroAcessorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAcessorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
