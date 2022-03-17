import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateintervenantComponent = class UpdateintervenantComponent {
    constructor(typeintervenantservice, intervenantService, messageService, router, route) {
        this.typeintervenantservice = typeintervenantservice;
        this.intervenantService = intervenantService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.intervenantForm = new FormGroup({
            intervenantid: new FormControl(null),
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
        this.typeintervenantservice.getListTypeIntervenant().subscribe((typeintervenant) => {
            this.listTypeIntervenant = typeintervenant;
        });
        this.intervenantid = this.route.snapshot.paramMap.get('id');
        this.intervenantService.getIntervenantbyid(this.intervenantid).subscribe(data => {
            console.log('intervenant', data.dateNaissance);
            this.intervenant = data;
            this.intervenantForm.setValue(data);
        }, error => console.log(error));
        this.items = [
            { label: 'Intervenant' },
            { label: 'Modifier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.intervenantForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
    }
    updateIntervenant() {
        if (this.intervenantForm.valid) {
            this.submitted = false;
            this.intervenantService.updateIntervenant(this.intervenantForm.value).subscribe(intervenant => {
                this.showSuccess();
                this.router.navigateByUrl('/intervenant');
            });
        }
        else {
            this.submitted = true;
        }
    }
    resetIntervenantForm() {
        this.intervenantForm.setValue(this.intervenant);
        this.submitted = false;
    }
};
UpdateintervenantComponent = __decorate([
    Component({
        selector: 'app-updateintervenant',
        templateUrl: './updateintervenant.component.html',
        styleUrls: ['./updateintervenant.component.css']
    })
], UpdateintervenantComponent);
export { UpdateintervenantComponent };
//# sourceMappingURL=updateintervenant.component.js.map