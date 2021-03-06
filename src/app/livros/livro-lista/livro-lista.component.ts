import { Component, OnInit, OnDestroy} from '@angular/core';

import { Livro } from '../livro.model'
import { LivroService } from '../livro.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  private livroSubscription: Subscription;

  constructor(public livroService: LivroService) {

  }

  ngOnInit(): void {
    this.livroService.getLivros();
    this.livroSubscription = this.livroService.getListaLivrosAtualizada()
    .subscribe( (livros: Livro[]) => {
      this.livros = livros;
    });
  }

  onDelete (id: string): void{
    this.livroService.removerLivro(id);
  }

  ngOnDestroy (): void {
    this.livroSubscription.unsubscribe();
  }
}
