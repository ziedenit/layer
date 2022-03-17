import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeAffaire } from 'src/app/entitie/TypeAffaire';
import { TypeaffaireService } from 'src/app/services/typeaffaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-typeaffaire',
  templateUrl: './typeaffaire.component.html',
  styleUrls: ['./typeaffaire.component.css'],
  providers: [MessageService]

})

export class TypeaffaireComponent implements OnInit {

  listTypeAffaire: TypeAffaire[];

  id: any;

  clonedTypeAffaire: { [s: string]: TypeAffaire; } = {};

  first: number = 0;

  items: MenuItem[];
  home: MenuItem;

  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  _unsubscribeAll: Subject<any>;

  constructor(private typeaffaireservice: TypeaffaireService, private route: ActivatedRoute, private messageService: MessageService) {

    this._unsubscribeAll = new Subject();

  }


  ngOnInit(): void {

    this.typeaffaireservice.getListTypeAffaire().subscribe((resultat: []) => {
      this.listTypeAffaire = resultat;
      console.log(this.listTypeAffaire);

    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Type Affaire' },
    ];

    this.home = { icon: 'pi pi-home' };

  }

  reset() {
    this.first = 0;
  }


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'ajout avec succée' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'mise a jour avec succée' });
  }

  showWarn() {
    this.messageService.add({severity:'warn', summary: 'Info', detail: 'Supprimé avec succée'});
}
  onRowEditInit(rowData) {

    this.clonedTypeAffaire[rowData.typeaffaireId] = { ...rowData };
  }


  onRowEditSave(rowData) {

    if (rowData.typeaffaireId != null) {
      this.updatetypeaffaire(rowData);

    } else {
      this.addtypeaffaire(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.typeaffaireId != null) {
      this.listTypeAffaire[index] = this.clonedTypeAffaire[rowData.typeaffaireId];
    } else {
      this.listTypeAffaire.shift();
    }

  }

  addRow() {

    const typeaffaire: TypeAffaire = {
      typeaffaireid: null,
      typeaffaire: null,
    };

    this.listTypeAffaire.unshift(typeaffaire);
    this.table.initRowEdit(typeaffaire);
  }

  updatetypeaffaire(rowData) {

    this.typeaffaireservice.updateTypeAffaire(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }

  addtypeaffaire(rowData) {

    this.typeaffaireservice.addTypeAffaire(rowData)
      .subscribe(data => {
        this.listTypeAffaire.shift();
        this.listTypeAffaire.unshift(data);
        this.showSuccess();
      });

  }

  showConfirm() {

    this.messageService.clear();
    this.messageService.add({key: 'typeaffaireId',
     sticky: true, severity:'warn',
      summary:'Voulez-vous supprimer ?',
      detail:'Confirmation',
     });
}


  deletetypeaffaire(typeaffaireId) {

    this.typeaffaireservice.DeleteTypeAffaire(typeaffaireId)
    .subscribe(data => {
      let index = this.listTypeAffaire.findIndex(el => el['typeaffaireId'] == typeaffaireId);
      this.listTypeAffaire.splice(index, 1);
      this.showWarn();
        });
    this.messageService.clear('typeaffaireId');
}

onReject() {
    this.messageService.clear('typeaffaireId');
}




}
