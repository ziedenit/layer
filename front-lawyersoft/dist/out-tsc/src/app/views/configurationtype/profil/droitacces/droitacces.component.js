import { __decorate } from "tslib";
import { DroitAcces } from './../../../../entitie/droit-acces';
import { Component } from '@angular/core';
let DroitaccesComponent = class DroitaccesComponent {
    constructor(profilService, pagesService, route, droitaccesService) {
        this.profilService = profilService;
        this.pagesService = pagesService;
        this.route = route;
        this.droitaccesService = droitaccesService;
        this.pagesSelected = [];
        this.droitAcces = [];
        this.showNext = false;
    }
    ngOnInit() {
        this.idProfile = this.route.snapshot.paramMap.get('idProfile');
        this.pagesService.getListPages().subscribe((pages) => {
            console.log('pages', pages);
            this.allPages = pages;
        });
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
        });
        this.showNext = true;
    }
    previous() {
        this.showNext = true;
        this.droitAcces = [];
    }
    addDroitAcces() {
        console.log('droit', this.droitAcces);
        this.droitaccesService.addAllDroitAcces(this.droitAcces, this.idProfile).subscribe(allDroitAcces => {
            console.log('resultat', allDroitAcces);
        });
    }
};
DroitaccesComponent = __decorate([
    Component({
        selector: 'app-droitacces',
        templateUrl: './droitacces.component.html',
        styleUrls: ['./droitacces.component.css']
    })
], DroitaccesComponent);
export { DroitaccesComponent };
//# sourceMappingURL=droitacces.component.js.map