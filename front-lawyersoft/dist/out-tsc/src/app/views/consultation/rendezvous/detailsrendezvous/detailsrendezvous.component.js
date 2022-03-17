import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let DetailsrendezvousComponent = class DetailsrendezvousComponent {
    constructor(consultationservice, messageService, router, intervenantService, userService, route) {
        this.consultationservice = consultationservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.userService = userService;
        this.route = route;
        this.submitted = false;
        this.etat = [
            { label: 'En cours', value: 'En cours' },
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.rdvForm = new FormGroup({
            consultationId: new FormControl(null),
            titre: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            type: new FormControl('rdv'),
            adresse: new FormControl(null, Validators.required),
            intervenant: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.intervenantService.getListIntervenant().subscribe((res) => {
            this.listIntervenant = res;
            console.log(this.listIntervenant);
        });
        this.userService.getListUser().subscribe((user) => {
            this.listUser = user;
            console.log(this.listUser);
        });
        this.consultationid = this.route.snapshot.paramMap.get('id');
        this.consultationservice.getConsultationbyid(this.consultationid).subscribe(consultation => {
            console.log("rdvForm" + this.rdvForm);
            this.consultation = consultation;
            this.rdvForm.setValue(consultation);
            console.log("rdvForm" + this.rdvForm);
        });
    }
    get f() { return this.rdvForm.controls; }
};
DetailsrendezvousComponent = __decorate([
    Component({
        selector: 'app-detailsrendezvous',
        templateUrl: './detailsrendezvous.component.html',
        styleUrls: ['./detailsrendezvous.component.css']
    })
], DetailsrendezvousComponent);
export { DetailsrendezvousComponent };
//# sourceMappingURL=detailsrendezvous.component.js.map