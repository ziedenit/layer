import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.date_value = Date.now();
    }
    ngOnInit() {
        this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
        this.prenom = JSON.parse(localStorage.getItem('currentUser')).prenom;
    }
    logout() {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map