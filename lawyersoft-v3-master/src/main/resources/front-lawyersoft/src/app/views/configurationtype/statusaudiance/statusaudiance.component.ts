import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusAudianceService } from 'src/app/services/statusaudiance.service';
import { StatusAudiance } from 'src/app/entitie/StatusAudiance';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-statusaudiance',
  templateUrl: './statusaudiance.component.html',
  styleUrls: ['./statusaudiance.component.css'],
  providers: [MessageService]

})
export class StatusaudianceComponent implements OnInit {

  listStatusAudiance: StatusAudiance[];

  id: any;

  clonedStatusAudiance: { [s: string]: StatusAudiance; } = {};

  first: number = 0;

  items: MenuItem[];
  home: MenuItem;

  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  _unsubscribeAll: Subject<any>;


  constructor(private statusaudianceService: StatusAudianceService, private route: ActivatedRoute, private messageService: MessageService) {
    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

    this.statusaudianceService.getListStatusAudiance().subscribe((resultat: []) => {
      this.listStatusAudiance = resultat;
      console.log(this.listStatusAudiance);

    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Status Audiance' },
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

    this.clonedStatusAudiance[rowData.statusId] = { ...rowData };
  }



  onRowEditSave(rowData) {

    if (rowData.StatusId != null) {
      this.updatestatus(rowData);

    } else {
      this.addstatus(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.statusId != null) {
      this.listStatusAudiance[index] = this.clonedStatusAudiance[rowData.statusId];
    } else {
      this.listStatusAudiance.shift();
    }

  }



  addRow() {

    const status: StatusAudiance = {
      statusId: null,
      status: null,
    };

    this.listStatusAudiance.unshift(status);
    this.table.initRowEdit(status);
  }

  updatestatus(rowData) {

    this.statusaudianceService.updateStatusAudiance(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }

  addstatus(rowData) {

    this.statusaudianceService.addStatusAudiance(rowData)
      .subscribe(data => {
        this.listStatusAudiance.shift();
        this.listStatusAudiance.unshift(data);
        this.showSuccess();
      });

  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'statusId',
      sticky: true, severity: 'warn',
      summary: 'Voulez-vous supprimer ?',
      detail: 'Confirmation',
    });
  }

  deletestatus(statusId) {

    this.statusaudianceService.deleteStatusAudiance(statusId)
      .subscribe(data => {
        let index = this.listStatusAudiance.findIndex(el => el['statusId'] == statusId);
        this.listStatusAudiance.splice(index, 1);
        this.showWarn();
      });
    this.messageService.clear('statusId');
  }

  onReject() {
    this.messageService.clear('statusId');
  }


}
