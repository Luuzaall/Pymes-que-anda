import { Component, OnInit } from '@angular/core';
import {
  IArticuloFamilia,
  ArticulosFamilias,
} from '../../models/i-articulo-familia';
// import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from '../../services/articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  Items = ArticulosFamilias;
  Titulo = 'Articulos Familias';
  constructor(
    //private articulosFamiliasService:  MockArticulosFamiliasService
    private articulosFamiliasService: ArticulosFamiliasService
  ) {}

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: IArticuloFamilia[]) => {
      this.Items = res;
    });
  }
}
