import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdatetafComponent = class UpdatetafComponent {
    constructor(consultationservice, messageService, router, intervenantService, userService, route) {
        this.consultationservice = consultationservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.userService = userService;
        this.route = route;
        this.submitted = false;
        this.etat = [
            /*{ label: 'En cours', value: 'En cours' },*/
            { label: 'Cloturé', value: 'Cloturé' },
            { label: 'Reporter', value: 'Reporter' },
        ];
        this.isValidFormSubmitted = false;
        this.tafForm = new FormGroup({
            consultationId: new FormControl(null),
            titre: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
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
            console.log("rdvForm" + this.tafForm);
            this.consultation = consultation;
            this.tafForm.setValue(consultation);
            console.log("rdvForm" + this.tafForm);
        });
        this.items = [
            { label: 'Consultation' },
            { label: 'Travail à faire' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.tafForm.controls; }
    updateTaf() {
        if (this.tafForm.valid) {
            this.submitted = false;
            this.consultationservice.updateConsultation(this.tafForm.value).subscribe(consultation => {
                this.showSuccess();
                this.router.navigateByUrl('/taf');
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
        this.tafForm.setValue(this.consultation);
        this.submitted = false;
    }
};
UpdatetafComponent = __decorate([
    Component({
        selector: 'app-updatetaf',
        templateUrl: './updatetaf.component.html',
        styleUrls: ['./updatetaf.component.css']
    })
], UpdatetafComponent);
export { UpdatetafComponent };
//# sourceMappingURL=updatetaf.component.js.map