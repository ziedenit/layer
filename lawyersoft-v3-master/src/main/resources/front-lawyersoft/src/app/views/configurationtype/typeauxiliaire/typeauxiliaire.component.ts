import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeAuxiliaire } from 'src/app/entitie/TypeAuxiliaire';
import { TypeauxiliaireService } from 'src/app/services/typeauxiliaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-typeauxiliaire',
  templateUrl: './typeauxiliaire.component.html',
  styleUrls: ['./typeauxiliaire.component.css'],
  providers: [MessageService],

})
export class TypeauxiliaireComponent implements OnInit {

  listTypeAuxiliaire: TypeAuxiliaire[];
  id: any;

  clonedTypeAuxiliaire: { [s: string]: TypeAuxiliaire; } = {};

  first: number = 0;

  items: MenuItem[];
  home: MenuItem;

  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  _unsubscribeAll: Subject<any>;


  // tslint:disable-next-line: max-line-length
  constructor(private typeauxiliaireservice: TypeauxiliaireService, private route: ActivatedRoute, private messageService: MessageService) {
    this._unsubscribeAll = new Subject();
  }



  ngOnInit(): void {

    this.typeauxiliaireservice.getListTypeAuxiliaire().subscribe((resultat: []) => {
      this.listTypeAuxiliaire = resultat;
      console.log(this.listTypeAuxiliaire);
    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Type Auxiliaire' },
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

    this.clonedTypeAuxiliaire[rowData.typeauxiliaireId] = { ...rowData };
  }

  onRowEditSave(rowData) {


    if (rowData.typeauxiliaireId != null) {
      this.updatetypeauxilaire(rowData);

    } else {
      this.addtypeauxilaire(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.typeauxiliaireId != null) {

      this.listTypeAuxiliaire[index] = this.clonedTypeAuxiliaire[rowData.typeauxiliaireId];
    } else {
      this.listTypeAuxiliaire.shift();
    }

  }

  addRow() {

    const typeauxiliaire: TypeAuxiliaire = {
      typeauxiliaireid: null,
      typeauxiliaire: null,
    };

    this.listTypeAuxiliaire.unshift(typeauxiliaire);
    this.table.initRowEdit(typeauxiliaire);
  }

  updatetypeauxilaire(rowData) {
    this.typeauxiliaireservice.updateTypeAuxiliaire(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }

  addtypeauxilaire(rowData) {

    this.typeauxiliaireservice.addTypeAuxiliaire(rowData)
      .subscribe(data => {
        this.listTypeAuxiliaire.shift();
        this.listTypeAuxiliaire.unshift(data);
        this.showSuccess();
      });

  }

  showConfirm() {

    this.messageService.clear();
    this.messageService.add({key: 'typeauxiliaireId',
     sticky: true, severity:'warn',
      summary:'Voulez-vous supprimer ?',
      detail:'Confirmation',
     });
}

deletetypeauxilaire(typeauxiliaireId) {

    this.typeauxiliaireservice.DeleteTypeAuxiliaire(typeauxiliaireId)
      .subscribe(data => {
        let index = this.listTypeAuxiliaire.findIndex(el => el['typeauxiliaireId'] == typeauxiliaireId);
        this.listTypeAuxiliaire.splice(index, 1);
        this.showWarn();
      });
    this.messageService.clear('typeauxiliaireId');
}

onReject() {
    this.messageService.clear('typeauxiliaireId');
}




}
