import { Router } from '@angular/router';
import { AuthService } from './../../security/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  date_value: number = Date.now();
  nom : string;
  prenom : string;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    this.nom = JSON.parse(localStorage.getItem('currentUser')).nom;
    this.prenom = JSON.parse(localStorage.getItem('currentUser')).prenom;


  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
