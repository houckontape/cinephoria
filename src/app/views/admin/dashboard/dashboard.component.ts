import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
totalVisiteurs: number =0;
sallesIncidents: number =0;
totalVentes:number =0;

tableauVentes: {
  nom:string;
  ticketsVendus:number;
}[]=[];

// Donnes pour le tableau
  chartLabels:string[]=[];
  chartData:any=[
    {data:[],label:'Tickets vendus'},
  ];
  chartOptions={
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }


  private fetchData() {
    // Données simulées
    this.totalVisiteurs = 1200;
    this.sallesIncidents = 3;
    this.totalVentes = 850;

    this.tableauVentes = [
      { nom: 'Salle 1', ticketsVendus: 300 },
      { nom: 'Salle 2', ticketsVendus: 250 },
      { nom: 'Salle 3', ticketsVendus: 150 },
      { nom: 'Salle 4', ticketsVendus: 150 },
    ];

    // Préparer les données des graphiques
    this.chartLabels = this.tableauVentes.map(salle => salle.nom);
    this.chartData[0].data = this.tableauVentes.map(salle => salle.ticketsVendus);

  }
}
