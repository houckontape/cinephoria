import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
totalVisiteurs: number =0;
sallesIncidents: number =0;
totalVentes:number =0;



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



    // Préparer les données des graphiques


  }
}
