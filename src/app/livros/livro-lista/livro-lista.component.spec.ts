/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivroListaComponent } from './livro-lista.component';

describe('LivroListaComponent', () => {
  let component: LivroListaComponent;
  let fixture: ComponentFixture<LivroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});