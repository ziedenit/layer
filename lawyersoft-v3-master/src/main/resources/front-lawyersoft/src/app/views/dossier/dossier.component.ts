import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  items: MenuItem[];
  home: MenuItem;


  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label:'Dossier'},

  ];

    this.home = {icon: 'pi pi-home'};

  }

}
