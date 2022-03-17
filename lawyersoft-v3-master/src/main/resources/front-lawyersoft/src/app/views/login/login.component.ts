import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './../../security/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      login: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        console.log('tag', response.headers)
        this.authService.loadToken(response.headers.get("Authorization"));
        this.userService.getUserByLogin(this.loginForm.value.login).subscribe(currentUser => {
          console.log('current', currentUser)
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          this.router.navigate(["/"]);
        })
      })
  }

}
