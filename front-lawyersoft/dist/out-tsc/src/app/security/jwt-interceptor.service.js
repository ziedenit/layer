import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let JwtInterceptorService = class JwtInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const token = this.authService.getToken();
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
        }
        return next.handle(req);
    }
};
JwtInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], JwtInterceptorService);
export { JwtInterceptorService };
//# sourceMappingURL=jwt-interceptor.service.js.map