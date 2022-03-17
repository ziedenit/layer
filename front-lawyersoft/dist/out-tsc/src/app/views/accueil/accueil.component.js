import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AccueilComponent = class AccueilComponent {
    constructor(phaseservice, audianceService, rendezvousService, tacheService, messageService, router, route, consultationService, lecteurjugementservice) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.rendezvousService = rendezvousService;
        this.tacheService = tacheService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.consultationService = consultationService;
        this.lecteurjugementservice = lecteurjugementservice;
        this.count = 0;
        this.today = new Date();
        this.nbretache = 0;
        this.nbreaudiance = 0;
        this.nbreredv = 0;
        this.nbreconsrdv = 0;
        this.nbreconstaf = 0;
        this.nbreconsfav = 0;
        this.nbreconsfavfalse = 0;
    }
    ngOnInit() {
        this.month = (new Date().getMonth() + 1).toString();
        console.log("this.month", this.month);
        this.consultationService.getListConsultationByType("rdv").subscribe((res) => {
            this.listConsultation = res;
            this.listConsultation.forEach(elem => {
                if ((new Date(elem.dateDebut).getMonth() + 1).toString() == this.month) {
                    console.log("consultation", elem);
                    this.nbreconsrdv++;
                    console.log(this.nbreconsrdv);
                }
            });
            // this.nbreconsrdv = this.listConsultation.length;
            this.consultationService.getListConsultationByType("taf").subscribe((res) => {
                this.listConsultation = res;
                this.listConsultation.forEach(elem => {
                    if ((new Date(elem.dateDebut).getMonth() + 1).toString() == this.month) {
                        console.log("consultation", elem);
                        this.nbreconstaf++;
                        console.log(this.nbreconstaf);
                    }
                });
                // this.nbreconstaf = this.listConsultation.length;
                this.data2 = {
                    datasets: [{
                            data: [
                                this.nbreconsrdv,
                                this.nbreconstaf
                            ],
                            backgroundColor: [
                                "#4BC0C0",
                                "#FF6384",
                            ],
                            label: 'My dataset'
                        }],
                    labels: [
                        "Rendez-vous",
                        "Travaille a faire"
                    ]
                };
            });
        });
        this.lecteurjugementservice.getListByFavorable(false).subscribe((res) => {
            this.listLecteurjugement = res;
            this.nbreconsfavfalse = this.listLecteurjugement.length;
            console.log("nbreconsfav", this.nbreconsfavfalse);
            this.lecteurjugementservice.getListByFavorable(true).subscribe((res) => {
                this.listLecteurjugement = res;
                this.nbreconsfav = this.listLecteurjugement.length;
                console.log("nbreconsfav", this.nbreconsfav);
                this.data3 = {
                    labels: ['Favorable', 'Non favorable'],
                    datasets: [
                        {
                            data: [this.nbreconsfav, this.nbreconsfavfalse],
                            backgroundColor: [
                                "#36A2EB",
                                "#FF6384",
                            ],
                            hoverBackgroundColor: [
                                "#36A2EB",
                                "#FF6384",
                            ]
                        }
                    ]
                };
            });
        });
        this.items = [
            { label: 'Statistiques' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
};
AccueilComponent = __decorate([
    Component({
        selector: 'app-accueil',
        templateUrl: './accueil.component.html',
        styleUrls: ['./accueil.component.css']
    })
], AccueilComponent);
export { AccueilComponent };
//# sourceMappingURL=accueil.component.js.map