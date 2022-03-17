import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Affaire } from 'src/app/entitie/Affaire';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Phase } from 'src/app/entitie/Phase';
import { AffaireDto } from 'src/app/dto/AffaireDto';
import { Honnoraire } from 'src/app/entitie/Honnoraire';
let AddaffaireComponent = class AddaffaireComponent {
    /*phaseForm = new FormGroup({
      nom: new FormControl(null, Validators.required),
      referencetribunal: new FormControl(this.affaireForm.value.reference),
      dateCreation: new FormControl(Date.now()),
      affaireId: new FormControl(null, Validators.required),
      idTribunal: new FormControl(this.affaireForm.value),
  
    });
  */
    constructor(affaireservice, typeaffaireservice, messageService, router, intervenantService, auxiliaireService, userService, tribunalService, honoraireService, phaseService) {
        this.affaireservice = affaireservice;
        this.typeaffaireservice = typeaffaireservice;
        this.messageService = messageService;
        this.router = router;
        this.intervenantService = intervenantService;
        this.auxiliaireService = auxiliaireService;
        this.userService = userService;
        this.tribunalService = tribunalService;
        this.honoraireService = honoraireService;
        this.phaseService = phaseService;
        // tslint:disable-next-line: variable-name
        this.date_value = Date.now();
        this.affairedto = new AffaireDto();
        this.submitted = false;
        this.listIntervenant = [];
        this.listAuxiliaire = [];
        this.listUser = [];
        this.etats = [
            { label: 'En cours', value: 'En cours' },
            { label: 'Pré-contentitieux', value: 'Pré-contentitieux' },
        ];
        this.isValidFormSubmitted = false;
        this.affaire = new Affaire();
        this.affaireForm = new FormGroup({
            titre: new FormControl(null, Validators.required),
            reference: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            etat: new FormControl(null, Validators.required),
            dateCreation: new FormControl(Date.now()),
            typeaffaireId: new FormControl(null, Validators.required),
            intervenant: new FormControl(null, Validators.required),
            auxiliaire: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        });
        this.phase = new Phase();
        this.honnoraire = new Honnoraire();
    }
    get phaseForm() { return this.affaireForm.get('phaseForm'); }
    ngOnInit() {
        this.typeaffaireservice.getListTypeAffaire().subscribe((resultat) => {
            this.listTypeaffaire = resultat;
        });
        this.intervenantService.getListIntervenant().subscribe((res) => {
            res.forEach(inter => {
                this.listIntervenant.push({ label: inter.nom + " " + inter.prenom, value: inter });
            });
        });
        this.tribunalService.getListTribunaux().subscribe((res) => {
            this.listTribunal = res;
            console.log(this.listTribunal);
        });
        this.auxiliaireService.getListAuxiliaire().subscribe((aux) => {
            //this.listAuxiliaire = aux;
            aux.forEach(auxiliaire => {
                this.listAuxiliaire.push({ label: auxiliaire.nom + " " + auxiliaire.prenom, value: auxiliaire });
            });
            //console.log(this.listAuxiliaire);
        });
        this.userService.getListUser().subscribe((users) => {
            //this.listUser = aux;
            users.forEach(user => {
                this.listUser.push({ label: user.nom + " " + user.prenom, value: user });
            });
            //console.log(this.listUser);
        });
    }
    resetAffaireForm() {
        this.affaireForm.reset();
        this.submitted = false;
    }
    addaffaire() {
        console.log("ss");
        this.submitted = true;
        console.log(this.affaireForm.value);
        if (this.affaireForm.valid) {
            console.log("valid");
            this.affairedto.affaire = this.affaireForm.value;
            this.phase.dateDebut = new Date();
            this.affairedto.phase = this.phase;
            this.honnoraire.dateHonnoraire = new Date();
            this.affairedto.honnoraire = this.honnoraire;
            console.log(this.affairedto);
            if (this.affairedto != null) {
                this.affaireservice.addAffaire(this.affairedto).subscribe(data => {
                    this.showSuccess();
                    console.log("add");
                    this.router.navigateByUrl('/affaire');
                    console.log(data);
                });
            }
            /* this.phaseService.addPhase(this.affairedto.phase).subscribe(data => {
               this.showSuccess();
               //this.router.navigateByUrl('/affaire');
               console.log(data);
             });*/
        }
    }
    /* addphase(): void {
       console.log("pahse")
       this.submitted = true;
       console.log(this.phaseForm.value);
       if (this.phaseForm.valid) {
  
  
  
         this.phaseService.addPhase(this.phaseForm.value).subscribe(data => {
           this.showSuccess();
           this.router.navigateByUrl('/affaire');
           console.log(data);
         });
       }
     }*/
    get f() { return this.affaireForm.controls; }
    showChange(event) {
        console.log(event);
        console.log(this.affaireForm.value);
    }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Affaire ajouté avec succès' });
    }
};
AddaffaireComponent = __decorate([
    Component({
        selector: 'app-addaffaire',
        templateUrl: './addaffaire.component.html',
        styleUrls: ['./addaffaire.component.css'],
        styles: [`
  .ui-grid label {
      display: inline-block;
      margin: 3px 0px 0px 4px;
  }
`]
    })
], AddaffaireComponent);
export { AddaffaireComponent };
//# sourceMappingURL=addaffaire.component.js.map