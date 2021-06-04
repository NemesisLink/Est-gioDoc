import { Injectable } from '@angular/core';
import { Empresa } from './empresa.model';
import{HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
   formData: Empresa = new Empresa
  readonly baseURL = 'http://localhost:61236/api/Empresa';
  list : Empresa[];

  constructor(private http: HttpClient) { }

  postEmpresa() {
    return this.http.post(this.baseURL, this.formData);
  }
  putEmpresa() {
    return this.http.put(`${this.baseURL}/${this.formData.EmpresaId}`, this.formData);
  }
  deleteEmpresa(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Empresa[]);
  }
}


