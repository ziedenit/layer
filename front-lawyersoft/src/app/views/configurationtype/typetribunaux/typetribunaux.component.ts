import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeTribunal } from 'src/app/entitie/TypeTribunal';
import { TypetribunauxService } from 'src/app/services/typetribunaux.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-typetribunaux',
  templateUrl: './typetribunaux.component.html',
  styleUrls: ['./typetribunaux.component.css'],
  providers: [MessageService]
})

export class TypetribunauxComponent implements OnInit {


  listTypetribunaux: TypeTribunal[];

  id: any;

  clonedTypeTribunal: { [s: string]: TypeTribunal; } = {};

  first: number = 0;

  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  _unsubscribeAll: Subject<any>;


  items: MenuItem[];
  home: MenuItem;


  constructor(private typetribunauxservice: TypetribunauxService, private route: ActivatedRoute, private messageService: MessageService) {

    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

    this.typetribunauxservice.getListTypeTribunaux().subscribe((resultat: []) => {
      this.listTypetribunaux = resultat;
      console.log(this.listTypetribunaux);

    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Type Tribunaux' },
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
    this.messageService.add({ severity: 'warn', summary: 'Info', detail: 'Supprimé avec succée' });
  }

  onRowEditInit(rowData) {

    this.clonedTypeTribunal[rowData.typetribunalId] = { ...rowData };
  }


  onRowEditSave(rowData) {

    if (rowData.typetribunalId != null) {
      this.updatetypetribunal(rowData);

    } else {
      this.addtypetribunal(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.typetribunalId != null) {
      this.listTypetribunaux[index] = this.clonedTypeTribunal[rowData.typetribunalId];
    } else {
      this.listTypetribunaux.shift();
    }

  }

  addRow() {

    const typetribunal: TypeTribunal = {
      typetribunalid: null,
      typetribunal: null,
    };

    this.listTypetribunaux.unshift(typetribunal);
    this.table.initRowEdit(typetribunal);
  }

  updatetypetribunal(rowData) {

    this.typetribunauxservice.updateTypeTribunaux(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }


  addtypetribunal(rowData) {

    this.typetribunauxservice.addtypeTribunaux(rowData)
      .subscribe(data => {
        this.listTypetribunaux.shift();
        this.listTypetribunaux.unshift(data);
        this.showSuccess();
      });

  }


  showConfirm() {

    this.messageService.clear();
    this.messageService.add({
      key: 'typetribunalId',
      sticky: true, severity: 'warn',
      summary: 'Voulez-vous supprimer ?',
      detail: 'Confirmation',
    });
  }

  deletetypetribunal(typetribunalId) {

    this.typetribunauxservice.DeleteTypeTribunaux(typetribunalId)
      .subscribe(data => {
        let index = this.listTypetribunaux.findIndex(el => el['typetribunalId'] == typetribunalId);
        this.listTypetribunaux.splice(index, 1);
        this.showWarn();

      });
    this.messageService.clear('typetribunalId');
  }

  onReject() {
    this.messageService.clear('typetribunalId');
  }

}
