import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css']
})
export class ZapatillaComponent implements OnInit {

  public titulo: string = "Componente de zapatillas";
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
      new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
    ];
   }

  ngOnInit(): void {
    console.log(this.zapatillas);
  }

}
