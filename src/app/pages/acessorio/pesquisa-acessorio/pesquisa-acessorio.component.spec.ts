import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaAcessorioComponent } from './pesquisa-acessorio.component';

describe('PesquisaAcessorioComponent', () => {
  let component: PesquisaAcessorioComponent;
  let fixture: ComponentFixture<PesquisaAcessorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaAcessorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaAcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
