import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdaterendezvousComponent = class UpdaterendezvousComponent {
    constructor(consultationservice, messageService, router, intervenantService, userService, route) {
        this.consultationservice = consultationservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.userService = userService;
        this.route = route;
        this.submitted = false;
        this.etat = [
            /* { label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
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
        this.items = [
            { label: 'Consultation' },
            { label: 'Rendez-vous' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.rdvForm.controls; }
    updateRdv() {
        if (this.rdvForm.valid) {
            this.submitted = false;
            this.consultationservice.updateConsultation(this.rdvForm.value).subscribe(consultation => {
                this.showSuccess();
                this.router.navigateByUrl('/rendez-vous');
            });
        }
        else {
            this.submitted = true;
        }
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
    }
    resetRdvForm() {
        this.rdvForm.setValue(this.consultation);
        this.submitted = false;
    }
};
UpdaterendezvousComponent = __decorate([
    Component({
        selector: 'app-updaterendezvous',
        templateUrl: './updaterendezvous.component.html',
        styleUrls: ['./updaterendezvous.component.css']
    })
], UpdaterendezvousComponent);
export { UpdaterendezvousComponent };
//# sourceMappingURL=updaterendezvous.component.js.map