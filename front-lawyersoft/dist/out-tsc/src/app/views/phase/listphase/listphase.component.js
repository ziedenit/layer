import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ListphaseComponent = class ListphaseComponent {
    constructor(phaseservice, audianceService, rendezvousService, tacheService, messageService, router, route) {
        this.phaseservice = phaseservice;
        this.audianceService = audianceService;
        this.rendezvousService = rendezvousService;
        this.tacheService = tacheService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.activeIndex = 1;
        this.msgs = [];
        this.first = 0;
        this.submitted = false;
        this.statuts = [
            { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
            { label: 'Pour notre réplique', value: 'Pour notre réplique' },
            { label: 'Lecture de jugement', value: 'Lecture de jugement' },
        ];
        this.etat = [
            { label: 'En cours', value: 'En cours' },
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        /*phaseForm = new FormGroup({
          phaseId: new FormControl(null, Validators.required),
          titre: new FormControl(null, Validators.required),
          nom: new FormControl(null, Validators.required),
          referencetribunal: new FormControl(null, Validators.required),
          dateDebut: new FormControl(Date.now()),
          dateFin: new FormControl(Date.now()),
          affaireId: new FormControl(null, Validators.required),
          tribunalId: new FormControl(null, Validators.required),
      
        });*/
        this.audianceForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            statut: new FormControl(null, Validators.required),
            dateAudiance: new FormControl(Date.now()),
            phaseId: new FormControl(),
        });
        this.tacheForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.affaireId = this.route.snapshot.paramMap.get('id');
        //  console.log("affaireid" + this.affaireId);
        this.phaseservice.findAllAffaire(this.affaireId).subscribe(resultat => {
            console.log("listPhase", resultat);
            this.listPhase = resultat;
        });
    }
};
ListphaseComponent = __decorate([
    Component({
        selector: 'app-listphase',
        templateUrl: './listphase.component.html',
        styleUrls: ['./listphase.component.css'],
        providers: [MessageService],
    })
], ListphaseComponent);
export { ListphaseComponent };
//# sourceMappingURL=listphase.component.js.map