import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaService } from '../shared/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: [
  ]
})
export class EmpresaComponent implements OnInit {

  constructor(public service: EmpresaService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
