import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Livro } from './livro.model';


@Injectable ({providedIn: 'root'})
export class LivroService {
  private livros: Livros[] = [];
  private listaLivroAtualizada = new Subject <Livro[]>();

  constructor (private httpClient: HttpClient){

  }

  getLivros(): void{
    this.httpClient.get<{mensagem: string, livroslientes: any}>('http://localhost:3000/api/livros').
    pipe(map((dados => {
      return dados.livros.map((livro) => {
        return {
          id: livro._id,
          titulo: livro.titulo,
          autor: livro.autor,
          paginas: livro.pagina
        }
      });
    }))).
    subscribe((livros) => {
      this.livros = livros;
      this.listaLivroAtualizada.next([...this.livros]);//push
  }

  adicionarLivro (id: number, titulo: string, autor: string, paginas: string): void{
    const livro: Livros = {
      id: null,
      titulo: titulo,
      autor: autor,
      paginas: paginas
    };
    this.httpClient.post <{mensagem: string, id:string}> ('http://localhost:3000/api/clientes', livro).subscribe((resposta) =>{
      console.log (resposta.mensagem);
      livro.id = resposta.id;
      this.livros.push(livro);
      this.listaLivrosAtualizada.next([...this.livros]);
    })
  }

  removerLivro (id: string): void{
    this.httpClient.delete(`http://localhost:3000/api/clientes/${id}`)
    .subscribe(() => {
      this.livros = this.livros.filter((cli) => {
        return cli.id !== id
      })
      this.listaLivrosAtualizada.next([...this.livros]);
    })
  }

  getListaLivrosAtualizada () {
    return this.listaLivrossAtualizada.asObservable();
  }
}
