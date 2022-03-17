import { __decorate } from "tslib";
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
let ErrorInterceptorService = class ErrorInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.logout();
                location.reload(true);
            }
            const error = err.error || err.statusText;
            return throwError(error);
        }));
    }
};
ErrorInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorInterceptorService);
export { ErrorInterceptorService };
//# sourceMappingURL=error-interceptor.service.js.map