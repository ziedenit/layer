import { Router } from '@angular/router';
import { MenuItem, Message, MessageService, ConfirmationService } from 'primeng/api';
import { User } from './../../../entitie/User';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  listUsers: User[];
  cols: any[];
  items: MenuItem[];
  home: MenuItem;
  first: number = 0;
  msgs: Message[] = [];
  constructor(private userService: UserService, private messageService: MessageService,
    private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getListUser().subscribe((users: User[]) => {
      this.listUsers = users;
    })
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

  confirm2(id: any) {
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];

        this.userService.DeleteUser(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listUsers.findIndex(el => el['idUser'] == id);
              this.listUsers.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Utilisateur supprimé avec succès' });

            },
            error => console.log(error));

      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });

  }
}
