import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Profil } from './../../../entitie/profil';
import { ProfilService } from './../../../services/profil.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  submitted = false;
  items: MenuItem[];
  home: MenuItem;
  listProfil: Profil[];
  userForm = new FormGroup({
    prenom: new FormControl(null, Validators.required),
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    etat: new FormControl(null),
    idProfil: new FormControl(null, Validators.required)
  });
  constructor(private profilService: ProfilService, private messageService: MessageService,
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.profilService.getListProfil().subscribe((profils: Profil[]) => {
      let index = profils.findIndex(el => el['nameProfil'] == "ADMINSTRATEUR LAWYER")
      profils.splice(index, 1)
      this.listProfil = profils;
    })
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
      } else {
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

}
