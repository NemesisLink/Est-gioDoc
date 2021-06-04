import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import{HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  formData: Usuario = new Usuario
  readonly baseURL = 'http://localhost:61236/api/Usuario';
  list : Usuario[];
  constructor(private http: HttpClient) { }

  postUsuario() {
    return this.http.post(this.baseURL, this.formData);
  }
  putUsuario() {
    return this.http.put(`${this.baseURL}/${this.formData.UserId}`, this.formData);
  }
  deleteUsuario(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Usuario[]);


  }


}
