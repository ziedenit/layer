import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tribunal } from 'src/app/entitie/Tribunal';
let UpdatetribunauxComponent = class UpdatetribunauxComponent {
    // tslint:disable-next-line: max-line-length
    constructor(tribunalService, route, typetribunalService, messageService, router) {
        this.tribunalService = tribunalService;
        this.route = route;
        this.typetribunalService = typetribunalService;
        this.messageService = messageService;
        this.router = router;
        this.submitted = false;
        this.isValidFormSubmitted = false;
        this.tribunalForm = new FormGroup({
            tribunalId: new FormControl(null),
            gouvernorat: new FormControl(null, Validators.required),
            ville: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
            typetribunalId: new FormControl(null, Validators.required)
        });
    }
    ngOnInit() {
        this.typetribunalService.getListTypeTribunaux().subscribe((resultat) => {
            this.listTypeTribunaux = resultat;
        });
        this.tribunal = new Tribunal();
        this.id = this.route.snapshot.paramMap.get('id');
        this.tribunalService.getTribunauxbyid(this.id)
            .subscribe(data => {
            this.tribunal = data;
            this.tribunalForm.setValue(data);
        }, error => console.log(error));
        this.items = [
            { label: 'Tribunaux' },
            { label: 'Mofidier' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    updateTribunaux() {
        console.log(this.tribunalForm.value);
        console.log(this.tribunalForm.value);
        this.tribunalService.updateTribunaux(this.tribunalForm.value)
            .subscribe(data => {
            this.showSuccess();
            this.router.navigateByUrl('/tribunaux');
        });
    }
    get f() { console.log(this.tribunalForm.controls); return this.tribunalForm.controls; }
    resetAuxiliaireForm() {
        this.tribunalForm.setValue(this.tribunal);
        this.submitted = false;
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Mise a jours effectué avec succès' });
    }
};
UpdatetribunauxComponent = __decorate([
    Component({
        selector: 'app-updatetribunaux',
        templateUrl: './updatetribunaux.component.html',
        styleUrls: ['./updatetribunaux.component.css'],
    })
], UpdatetribunauxComponent);
export { UpdatetribunauxComponent };
//# sourceMappingURL=updatetribunaux.component.js.map