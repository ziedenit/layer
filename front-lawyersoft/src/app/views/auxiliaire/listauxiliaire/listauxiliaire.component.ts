import { Message, ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { Auxiliaire } from './../../../entitie/Auxiliaire';
import { AuxiliaireService } from './../../../services/auxiliaire.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-listauxiliaire',
  templateUrl: './listauxiliaire.component.html',
  styleUrls: ['./listauxiliaire.component.css']
})
export class ListauxiliaireComponent implements OnInit {

  @ViewChild('tt') private _table: Table;
  listAuxiliaire: Auxiliaire[];
  cols: any[];
  selectedAuxiliaire: Auxiliaire;
  msgs: Message[] = [];
  first: number = 0;
  rowGroupMetadata: any;
  items: MenuItem[];
  home: MenuItem;


  constructor(private auxiliaireService: AuxiliaireService,
              private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.auxiliaireService.getListAuxiliaire().subscribe((aux: Auxiliaire[]) => {
      this.listAuxiliaire = aux;
      console.log(this.listAuxiliaire);

    });
    this.cols = [
      { header: 'Nom' },
      { header: 'Prénom' },
      { header: 'Email' },
      { header: 'Télephone' },
      { header: 'Type' }
    ];

    this.items = [
      {label:'Auxiliaire'},
      {label:'Liste'},
  ];

    this.home = {icon: 'pi pi-home'};
  }

  confirm2(id: any) {
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.auxiliaireService.deleteAuxiliaire(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listAuxiliaire.findIndex(el => el['auxiliaireId'] == id);
              this.listAuxiliaire.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Auxiliaire supprimé avec succès' });
            },
            error => console.log(error));
      },
      reject: () => {

        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
