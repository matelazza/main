import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaVeiculoComponent } from './pesquisa-veiculo.component';

describe('PesquisaVeiculoComponent', () => {
  let component: PesquisaVeiculoComponent;
  let fixture: ComponentFixture<PesquisaVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
