import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
let OperationComponent = class OperationComponent {
    constructor(phaseservice, audianceService, rendezvousService, tacheService, messageService, router, route, confirmationService) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.rendezvousService = rendezvousService;
        this.tacheService = tacheService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.nbretache = 0;
        this.nbreaudiance = 0;
        this.nbreredv = 0;
    }
    ngOnInit() {
        this.phaseId = this.route.snapshot.paramMap.get('id');
        this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
            this.phase = phase;
            this.items = [
                { label: this.phase.nom },
                { label: 'Opérations' },
            ];
            this.home = { icon: 'pi pi-home' };
        });
        this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
            this.listAudiance = resultat;
            this.nbreaudiance = this.listAudiance.length;
            this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
                console.log("listTache", resultat);
                this.listTache = resultat;
                this.nbretache = this.listTache.length;
                this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
                    this.listRendezvous = resultat;
                    this.nbreredv = this.listRendezvous.length;
                    this.data1 = {
                        labels: ['Audiance', 'Travaux à faire', 'Rendez-vous'],
                        datasets: [
                            {
                                data: [this.nbreaudiance, this.nbretache, this.nbreredv],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }
                        ]
                    };
                });
            });
        });
    }
};
OperationComponent = __decorate([
    Component({
        selector: 'app-operation',
        templateUrl: './operation.component.html',
        styleUrls: ['./operation.component.css'],
        providers: [MessageService]
    })
], OperationComponent);
export { OperationComponent };
//# sourceMappingURL=operation.component.js.map