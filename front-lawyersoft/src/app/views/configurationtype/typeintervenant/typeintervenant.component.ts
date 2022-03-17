import { Component, OnInit, ViewChild } from '@angular/core';
import { TypeIntervenant } from 'src/app/entitie/TypeIntervenant';
import { TypeintervenantService } from 'src/app/services/typeintervenant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table/table';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-typeintervenant',
  templateUrl: './typeintervenant.component.html',
  styleUrls: ['./typeintervenant.component.css'],
  providers: [MessageService],

})
export class TypeintervenantComponent implements OnInit {


  listTypeIntervenant: TypeIntervenant[];
  id: any;
  clonedTypeIntervenant: { [s: string]: TypeIntervenant; } = {};
  first: number = 0;

  items: MenuItem[];
  home: MenuItem;


  @ViewChild('table') table: Table;

  // tslint:disable-next-line: variable-name
  _unsubscribeAll: Subject<any>;


  // tslint:disable-next-line: max-line-length
  constructor(private typeintervenantservice: TypeintervenantService, private route: ActivatedRoute, private messageService: MessageService) { }



  ngOnInit(): void {
    this.typeintervenantservice.getListTypeIntervenant().subscribe((resultat: []) => {
      this.listTypeIntervenant = resultat;
      console.log(this.listTypeIntervenant);
    });

    this.items = [
      { label: 'Configuration' },
      { label: 'Type Intervenant' },
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
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'mise a jour avec succée' });
  }

  showWarn() {
    this.messageService.add({severity:'warn', summary: 'Info', detail: 'Supprimé avec succée'});
}

  onRowEditInit(rowData) {

    this.clonedTypeIntervenant[rowData.typeintervenantId] = { ...rowData };
  }


  onRowEditSave(rowData) {
    if (rowData.typeintervenantId != null) {
      this.updatetypeintervenant(rowData);
    } else {
      this.addtypeintervenant(rowData);
    }

  }

  onRowEditCancel(rowData, index: number) {

    if (rowData.typeintervenantId != null) {
      this.listTypeIntervenant[index] = this.clonedTypeIntervenant[rowData.typeintervenantId];
    } else {
      this.listTypeIntervenant.shift();
    }
  }

  addRow() {

    const typeintervenant: TypeIntervenant = {
      typeintervenantid: null,
      typeintervenant: null,
    };

    this.listTypeIntervenant.unshift(typeintervenant);
    this.table.initRowEdit(typeintervenant);
  }

  updatetypeintervenant(rowData) {

    this.typeintervenantservice.updateTypeIntervenant(rowData)
      .subscribe(data => {
        this.showInfo();
      });

  }

  addtypeintervenant(rowData) {

    this.typeintervenantservice.addTypeIntervenant(rowData)
      .subscribe(data => {
        this.listTypeIntervenant.shift();
        this.listTypeIntervenant.unshift(data);
        this.showSuccess();
      });

  }

  showConfirm() {

    this.messageService.clear();
    this.messageService.add({key: 'typeintervenantId',
     sticky: true, severity:'warn',
      summary:'Voulez-vous supprimer ?',
      detail:'Confirmation',
     });
}


  deletetypeintervenant(typeintervenantId) {

    this.typeintervenantservice.DeleteTypeIntervenant(typeintervenantId)
    .subscribe(data => {
      let index = this.listTypeIntervenant.findIndex(el => el['typeintervenantId'] == typeintervenantId);
      this.listTypeIntervenant.splice(index, 1);
      this.showWarn();

    });
    this.messageService.clear('typeintervenantId');
}

onReject() {
  this.messageService.clear('typeintervenantId');
}






}
