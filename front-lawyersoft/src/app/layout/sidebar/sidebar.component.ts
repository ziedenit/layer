import { menu } from './menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;
  droitsAcces: any;
  accesPages: any[] = []
  menu: any[] = [];
  constructor() { }

  ngOnInit(): void {

    //console.log('menu', this.menu)
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('currentUser', this.currentUser.idProfil.droitsAcces)
    if (this.currentUser.idProfil.nameProfil == 'ADMINSTRATEUR LAWYER') {
      this.menu = menu;
    } else {
      this.currentUser.idProfil.droitsAcces.forEach(droit => {
        //console.log('droit', droit.page.nom)
        //this.accesPages.push(droit.page.nom)
        menu.forEach(el => {
          if (el.name == droit.page.nom) {
            this.menu.push(el)
          }
        })
      })
    }
  }

}
