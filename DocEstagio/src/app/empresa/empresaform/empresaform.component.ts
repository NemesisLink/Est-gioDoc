import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/shared/empresa.service';
import { NgForm } from '@angular/forms';
import { Empresa } from 'src/app/shared/empresa.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-empresaform',
  templateUrl: './empresaform.component.html',
  styles: [
  ]
})
export class EmpresaformComponent implements OnInit {

  constructor(public service:EmpresaService,
    private toastr:ToastrService) { }

  ngOnInit(): void {



  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Empresa();
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
    this.toastr.success('Enviado com sucesso')
  }

  insertRecord(form: NgForm) {
    this.service.postEmpresa().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }

      )
     }
updateRecord(form: NgForm){
this.service.postEmpresa().subscribe(
  res => {
    this.resetForm(form);
    this.service.refreshList();
    this.toastr.success('Atualizado com sucesso')
  },
  err => {
    console.log(err);
  }

)

}

    }
