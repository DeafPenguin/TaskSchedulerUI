import { Injectable } from '@angular/core';
// @ts-ignore
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [
    new Usuario("Victor Murilo", "victor.machado@zgsolucoes.com.br", new Date(), "12345678")
  ];

  constructor(){}

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
}
