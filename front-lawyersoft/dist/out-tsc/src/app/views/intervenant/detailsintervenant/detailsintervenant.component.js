import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let DetailsintervenantComponent = class DetailsintervenantComponent {
    constructor(typeintervenantservice, intervenantService, messageService, router, route) {
        this.typeintervenantservice = typeintervenantservice;
        this.intervenantService = intervenantService;
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.intervenantForm = new FormGroup({
            intervenantid: new FormControl(null),
            cin: new FormControl(),
            nom: new FormControl(),
            prenom: new FormControl(),
            dateNaissance: new FormControl(),
            email: new FormControl(),
            gouvernorat: new FormControl(),
            ville: new FormControl(),
            adresse: new FormControl(),
            codePostal: new FormControl(),
            profession: new FormControl(),
            telephone: new FormControl(),
            typeintervenantId: new FormControl()
        });
    }
    ngOnInit() {
        this.typeintervenantservice.getListTypeIntervenant().subscribe((typeintervenant) => {
            this.listTypeIntervenant = typeintervenant;
        });
        this.intervenantid = this.route.snapshot.paramMap.get('id');
        this.intervenantService.getIntervenantbyid(this.intervenantid).subscribe(data => {
            this.intervenant = data;
            this.intervenantForm.setValue(data);
        }, error => console.log(error));
        this.items = [
            { label: 'Intervenant' },
            { label: 'Détails' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    get f() { return this.intervenantForm.controls; }
};
DetailsintervenantComponent = __decorate([
    Component({
        selector: 'app-detailsintervenant',
        templateUrl: './detailsintervenant.component.html',
        styleUrls: ['./detailsintervenant.component.css']
    })
], DetailsintervenantComponent);
export { DetailsintervenantComponent };
//# sourceMappingURL=detailsintervenant.component.js.map