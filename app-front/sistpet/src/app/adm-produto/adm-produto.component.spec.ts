import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProdutoComponent } from './adm-produto.component';

describe('AdmProdutoComponent', () => {
  let component: AdmProdutoComponent;
  let fixture: ComponentFixture<AdmProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
