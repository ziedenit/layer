import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tribunal } from 'src/app/entitie/Tribunal';
let AddtribunauxComponent = class AddtribunauxComponent {
    // tslint:disable-next-line: max-line-length
    constructor(tribunalService, typetribunalService, messageService, router) {
        this.tribunalService = tribunalService;
        this.typetribunalService = typetribunalService;
        this.messageService = messageService;
        this.router = router;
        this.submitted = false;
        this.isValidFormSubmitted = false;
        this.tribunal = new Tribunal();
        this.tribunalForm = new FormGroup({
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
        this.items = [
            { label: 'Tribunaux' },
            { label: 'Ajouter' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    resetTribunalForm() {
        this.tribunalForm.reset();
        this.submitted = false;
    }
    addtribunal() {
        this.submitted = true;
        if (this.tribunalForm.valid) {
            console.log(this.tribunalForm.value);
            this.tribunalService.addTribunaux(this.tribunalForm.value).subscribe(data => {
                this.showSuccess();
                this.router.navigateByUrl('/tribunaux');
                console.log(data);
            });
        }
    }
    get f() { console.log(this.tribunalForm.controls); return this.tribunalForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Tribunal ajouté avec succès' });
    }
};
AddtribunauxComponent = __decorate([
    Component({
        selector: 'app-addtribunaux',
        templateUrl: './addtribunaux.component.html',
        styleUrls: ['./addtribunaux.component.css']
    })
], AddtribunauxComponent);
export { AddtribunauxComponent };
//# sourceMappingURL=addtribunaux.component.js.map