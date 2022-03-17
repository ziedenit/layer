import { DroitaccesService } from './../../../../services/droitacces.service';
import { ProfilService } from './../../../../services/profil.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DroitAcces } from './../../../../entitie/droit-acces';
import { Pages } from './../../../../entitie/pages';
import { PagesService } from './../../../../services/pages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-droitacces',
  templateUrl: './droitacces.component.html',
  styleUrls: ['./droitacces.component.css']
})
export class DroitaccesComponent implements OnInit {
  allPages: Pages[];
  pagesSelected: Pages[] = [];
  droitAcces: DroitAcces[] = [];
  showNext = false;
  items: MenuItem[];
  home: MenuItem;
  idProfile: any;
  profile: any;
  constructor(private profilService: ProfilService, private pagesService: PagesService,
    private route: ActivatedRoute, private droitaccesService: DroitaccesService) { }

  ngOnInit(): void {
    this.idProfile = this.route.snapshot.paramMap.get('idProfile');

    this.pagesService.getListPages().subscribe((pages: Pages[]) => {
      console.log('pages', pages);
      this.allPages = pages;
    })
    this.items = [
      { label: 'Profile' },
      { label: "Droits d'accés" },
    ];

    this.home = { icon: 'pi pi-home' };
  }
  next() {
    this.pagesSelected.forEach(page => {
      let newDroitAcces = new DroitAcces();
      newDroitAcces.page = page;
      //newDroitAcces.profile = this.profile;
      this.droitAcces.push(newDroitAcces);
    })
    this.showNext = true;
  }
  previous() {
    this.showNext = true;
    this.droitAcces = [];
  }
  addDroitAcces() {
    console.log('droit', this.droitAcces)
    this.droitaccesService.addAllDroitAcces(this.droitAcces, this.idProfile).subscribe(allDroitAcces => {
      console.log('resultat', allDroitAcces)
    })
  }

}
