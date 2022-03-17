import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let DetailstafComponent = class DetailstafComponent {
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
        this.TafForm = new FormGroup({
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
        this.userService.getListUser().subscribe((user) => {
            this.listUser = user;
            console.log(this.listUser);
        });
        this.consultationid = this.route.snapshot.paramMap.get('id');
        this.consultationservice.getConsultationbyid(this.consultationid).subscribe(consultation => {
            console.log("rdvForm" + this.TafForm);
            this.consultation = consultation;
            this.TafForm.setValue(consultation);
            console.log("rdvForm" + this.TafForm);
        });
    }
};
DetailstafComponent = __decorate([
    Component({
        selector: 'app-detailstaf',
        templateUrl: './detailstaf.component.html',
        styleUrls: ['./detailstaf.component.css']
    })
], DetailstafComponent);
export { DetailstafComponent };
//# sourceMappingURL=detailstaf.component.js.map