import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sale',
    imports: [
        NgForOf
    ],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  tableauVentes = [
    { nom: 'Salle 1', ticketsVendus: 300 },
    { nom: 'Salle 2', ticketsVendus: 250 },
    { nom: 'Salle 3', ticketsVendus: 150 },
    { nom: 'Salle 4', ticketsVendus: 150 },
  ];


}
