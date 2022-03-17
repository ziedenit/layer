import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListuserComponent = class ListuserComponent {
    constructor(userService, messageService, confirmationService, router) {
        this.userService = userService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.first = 0;
        this.msgs = [];
    }
    ngOnInit() {
        this.userService.getListUser().subscribe((users) => {
            this.listUsers = users;
        });
        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'prenom', header: 'Prénom' },
            { field: 'login', header: 'Login' },
            { field: 'email', header: 'Email' },
            { field: 'etat', header: 'Etat' },
            { field: 'idProfil', header: 'Profile' }
        ];
        this.items = [
            { label: 'Utilisateur' },
            { label: 'Liste' },
        ];
        this.home = { icon: 'pi pi-home' };
    }
    confirm2(id) {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
                this.userService.DeleteUser(id)
                    .subscribe(data => {
                    /* reload page */
                    let index = this.listUsers.findIndex(el => el['idUser'] == id);
                    this.listUsers.splice(index, 1);
                    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Utilisateur supprimé avec succès' });
                }, error => console.log(error));
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
};
ListuserComponent = __decorate([
    Component({
        selector: 'app-listuser',
        templateUrl: './listuser.component.html',
        styleUrls: ['./listuser.component.css']
    })
], ListuserComponent);
export { ListuserComponent };
//# sourceMappingURL=listuser.component.js.map