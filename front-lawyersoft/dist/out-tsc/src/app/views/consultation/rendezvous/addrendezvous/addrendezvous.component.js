import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Consultation } from 'src/app/entitie/Consultation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddrendezvousComponent = class AddrendezvousComponent {
    constructor(consultationservice, messageService, router, intervenantService, userService) {
        this.consultationservice = consultationservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.userService = userService;
        this.date_value = Date.now();
        this.submitted = false;
        this.listIntervenant = [];
        this.listUser = [];
        this.etat = [
        /*{ label: 'En cours', value: 'En cours' },
        { label: 'Cloturé', value: 'Cloturé' },
        { label: 'Reporter', value: 'Reporter' },*/
        ];
        this.isValidFormSubmitted = false;
        this.consultation = new Consultation();
        this.rdvForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
            type: new FormControl('rdv'),
            adresse: new FormControl(null, Validators.required),
            intervenant: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.intervenantService.getListIntervenant().subscribe((res) => {
            res.forEach(inter => {
                this.listIntervenant.push({ label: inter.nom + " " + inter.prenom, value: inter });
            });
        });
        this.userService.getListUser().subscribe((user) => {
            user.forEach(user => {
                this.listUser.push({ label: user.nom + " " + user.prenom, value: user });
            });
        });
    }
    resetRdvForm() {
        this.rdvForm.reset();
        this.submitted = false;
    }
    addrendezvous() {
        console.log("ss");
        this.submitted = true;
        console.log(this.rdvForm.value);
        if (this.rdvForm.valid) {
            this.consultationservice.addConsultation(this.rdvForm.value).subscribe(data => {
                this.showSuccess();
                this.router.navigateByUrl('/rendez-vous');
                console.log(data);
            });
        }
    }
    get f() { return this.rdvForm.controls; }
    showChange(event) {
        console.log(event);
        console.log(this.rdvForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Rendez-vous ajouté avec succès' });
    }
};
AddrendezvousComponent = __decorate([
    Component({
        selector: 'app-addrendezvous',
        templateUrl: './addrendezvous.component.html',
        styleUrls: ['./addrendezvous.component.css'],
        styles: [`
  .ui-grid label {
      display: inline-block;
      margin: 3px 0px 0px 4px;
  }
`]
    })
], AddrendezvousComponent);
export { AddrendezvousComponent };
//# sourceMappingURL=addrendezvous.component.js.map