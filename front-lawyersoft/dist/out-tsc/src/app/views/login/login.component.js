import { __decorate } from "tslib";
import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(_formBuilder, authService, userService, router) {
        this._formBuilder = _formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            login: ["", [Validators.required]],
            password: ["", [Validators.required]]
        });
    }
    onSubmit() {
        this.submitted = true;
        this.authService.login(this.loginForm.value).subscribe(response => {
            console.log('tag', response.headers);
            this.authService.loadToken(response.headers.get("Authorization"));
            this.userService.getUserByLogin(this.loginForm.value.login).subscribe(currentUser => {
                console.log('current', currentUser);
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                this.router.navigate(["/"]);
            });
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map