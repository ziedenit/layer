import { __decorate } from "tslib";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
let AdduserComponent = class AdduserComponent {
    constructor(profilService, messageService, router, userService) {
        this.profilService = profilService;
        this.messageService = messageService;
        this.router = router;
        this.userService = userService;
        this.submitted = false;
        this.userForm = new FormGroup({
            prenom: new FormControl(null, Validators.required),
            login: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            etat: new FormControl(null),
            idProfil: new FormControl(null, Validators.required)
        });
    }
    ngOnInit() {
        this.profilService.getListProfil().subscribe((profils) => {
            let index = profils.findIndex(el => el['nameProfil'] == "ADMINSTRATEUR LAWYER");
            profils.splice(index, 1);
            this.listProfil = profils;
        });
        this.items = [
            { label: 'Tribunaux' },
            { label: 'Ajouter' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    addUser() {
        this.submitted = true;
        if (this.userForm.valid) {
            if (this.userForm.value.login == "ADMINSTRATEUR LAWYER") {
                this.messageService.add({ severity: 'warn', summary: 'Message', detail: 'Login utilisé reserver au super administrateur' });
            }
            else {
                this.userService.addUser(this.userForm.value).subscribe(data => {
                    this.showSuccess();
                    this.router.navigateByUrl('/user');
                });
            }
        }
    }
    resetUserForm() {
        this.userForm.reset();
        this.submitted = false;
    }
    get f() { return this.userForm.controls; }
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Utilisateur ajouté avec succès' });
    }
};
AdduserComponent = __decorate([
    Component({
        selector: 'app-adduser',
        templateUrl: './adduser.component.html',
        styleUrls: ['./adduser.component.css']
    })
], AdduserComponent);
export { AdduserComponent };
//# sourceMappingURL=adduser.component.js.map