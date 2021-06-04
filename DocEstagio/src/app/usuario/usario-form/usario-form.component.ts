import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/usuario.service';
import{Usuario} from 'src/app/shared/usuario.model';
@Component({
  selector: 'app-usario-form',
  templateUrl: './usario-form.component.html',
  styles: [
  ]
})
export class UsarioFormComponent implements OnInit {




  constructor(public service:UsuarioService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Usuario();
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postUsuario().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}
