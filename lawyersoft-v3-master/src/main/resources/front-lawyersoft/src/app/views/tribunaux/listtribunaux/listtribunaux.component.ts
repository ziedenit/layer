import { DroitAcces } from './../../../entitie/droit-acces';
import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/app/services/tribunal.service';
import { Tribunal } from 'src/app/entitie/Tribunal';
import { TypeTribunal } from 'src/app/entitie/TypeTribunal';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { User } from 'src/app/entitie/user';


@Component({
  selector: 'app-listtribunaux',
  templateUrl: './listtribunaux.component.html',
  styleUrls: ['./listtribunaux.component.css'],
  providers: [ConfirmationService]

})
export class ListtribunauxComponent implements OnInit {
  listTribunaux: Tribunal[]; /**listtribunaux */

  tribunal: Tribunal;

  tribunaltype: TypeTribunal;

  cols: any[];

  rowGroupMetadata: any;

  first: number = 0;

  telephoneFilter: number;

  yearTimeout: any;

  selectedtribunal: Tribunal;

  msgs: Message[] = [];

  items: MenuItem[];
  home: MenuItem;
  currentUser: any;
  droitTribunal: DroitAcces;




  // tslint:disable-next-line: max-line-length
  constructor(private tribunalService: TribunalService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
    this.droitTribunal = new DroitAcces();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.droitTribunal = this.currentUser.idProfil.droitsAcces.find(el => el['page']['nom'] == "Tribunaux");

    this.tribunalService.getListTribunaux().subscribe((resultat: []) => {
      this.listTribunaux = resultat;
      /* this.updateRowGroupMetaData();*/

    });


    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'adresse', header: 'Adresse' },
      { field: 'gouvernorat', header: 'Gouvernorat' },
      { field: 'ville', header: 'Ville' },
      { field: 'telephone', header: 'Telephone' },
      { field: 'type', header: 'Type' }

    ];

    this.items = [
      { label: 'Tribunaux' },
      { label: 'Liste' },
    ];

    this.home = { icon: 'pi pi-home' };


  }

  reset() {
    this.first = 0;
  }


  confirm2(id: any) {
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];

        this.tribunalService.deleteTribunaux(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listTribunaux.findIndex(el => el['tribunalId'] == id);
              this.listTribunaux.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Tribunal supprimé avec succès' });

            },
            error => console.log(error));

      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
