import { Component, OnInit } from '@angular/core';
import{UsuarioService} from 'src/app/shared/usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(public service: UsuarioService) { }

  ngOnInit(): void {
    this.service.refreshList();

  }
  populateForm(selectedRecord: any) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
}
