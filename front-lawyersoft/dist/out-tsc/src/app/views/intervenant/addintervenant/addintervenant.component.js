import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddintervenantComponent = class AddintervenantComponent {
    constructor(Typeintervenantservice, intervenantService, messageService, router) {
        this.Typeintervenantservice = Typeintervenantservice;
        this.intervenantService = intervenantService;
        this.messageService = messageService;
        this.router = router;
        this.submitted = false;
        this.intervenantForm = new FormGroup({
            cin: new FormControl(null, [Validators.required, Validators.max(999999999)]),
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            dateNaissance: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            gouvernorat: new FormControl(null, Validators.required),
            ville: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            codePostal: new FormControl(null, [Validators.required, Validators.max(9999)]),
            profession: new FormControl(null, Validators.required),
            telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
            typeintervenantId: new FormControl(null, Validators.required)
        });
    }
    ngOnInit() {
        this.Typeintervenantservice.getListTypeIntervenant().subscribe((typeinter) => {
            this.listTypeIntervenant = typeinter;
        });
        this.items = [
            { label: 'Intervenant' },
            { label: 'Ajouter' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    resetIntervenantForm() {
        this.intervenantForm.reset();
        this.submitted = false;
    }
    addIntervenant() {
        this.submitted = true;
        console.log(this.intervenantForm);
        if (this.intervenantForm.valid) {
            console.log(this.intervenantForm.value);
            this.intervenantService.addIntervenant(this.intervenantForm.value).subscribe(data => {
                this.showSuccess();
                this.router.navigateByUrl('/intervenant');
                console.log(data);
            });
        }
    }
    get f() { return this.intervenantForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Intervenant ajouté avec succès' });
    }
};
AddintervenantComponent = __decorate([
    Component({
        selector: 'app-addintervenant',
        templateUrl: './addintervenant.component.html',
        styleUrls: ['./addintervenant.component.css']
    })
], AddintervenantComponent);
export { AddintervenantComponent };
//# sourceMappingURL=addintervenant.component.js.map