import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Consultation } from 'src/app/entitie/Consultation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddtafComponent = class AddtafComponent {
    constructor(consultationservice, messageService, router, intervenantService, userService) {
        this.consultationservice = consultationservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.userService = userService;
        this.date_value = Date.now();
        this.submitted = false;
        this.listUser = [];
        this.etat = [
        /* { label: 'En cours', value: 'En cours' },
         { label: 'Cloturé', value: 'Cloturé' },
         { label: 'Reporter', value: 'Reporter' },*/
        ];
        this.isValidFormSubmitted = false;
        this.consultation = new Consultation();
        this.tafForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            dateDebut: new FormControl(null, Validators.required),
            type: new FormControl('taf'),
            adresse: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        });
    }
    ngOnInit() {
        this.userService.getListUser().subscribe((user) => {
            user.forEach(user => {
                this.listUser.push({ label: user.nom + " " + user.prenom, value: user });
            });
        });
    }
    resetRdvForm() {
        this.tafForm.reset();
        this.submitted = false;
    }
    addtaf() {
        console.log("ss");
        this.submitted = true;
        console.log(this.tafForm.value);
        if (this.tafForm.valid) {
            this.consultationservice.addConsultation(this.tafForm.value).subscribe(data => {
                this.showSuccess();
                this.router.navigateByUrl('/taf');
                console.log(data);
            });
        }
    }
    get f() { return this.tafForm.controls; }
    showChange(event) {
        console.log(event);
        console.log(this.tafForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Travail à faire ajouté avec succès' });
    }
};
AddtafComponent = __decorate([
    Component({
        selector: 'app-addtaf',
        templateUrl: './addtaf.component.html',
        styleUrls: ['./addtaf.component.css'],
        styles: [`
  .ui-grid label {
      display: inline-block;
      margin: 3px 0px 0px 4px;
  }
`]
    })
], AddtafComponent);
export { AddtafComponent };
//# sourceMappingURL=addtaf.component.js.map