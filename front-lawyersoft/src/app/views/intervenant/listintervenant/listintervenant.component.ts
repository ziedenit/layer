import { Component, OnInit } from '@angular/core';
import { IntervenantService } from 'src/app/services/intervenant.service';
import { Intervenant } from 'src/app/entitie/Intervenant';
import { TypeIntervenant } from 'src/app/entitie/TypeIntervenant';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ConfirmationService, MessageService, MenuItem } from 'primeng/api';



@Component({
  selector: 'app-listintervenant',
  templateUrl: './listintervenant.component.html',
  styleUrls: ['./listintervenant.component.css']
})
export class ListintervenantComponent implements OnInit {

  listIntervenant: Intervenant[];
  cols: any[];
  selectedIntervenant: Intervenant;
  msgs: Message[] = [];
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;

  constructor(private intervenantService: IntervenantService,
              private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.intervenantService.getListIntervenant().subscribe((res: Intervenant[]) => {
      this.listIntervenant = res;
      console.log(this.listIntervenant);
    });

    this.cols = [
      { header: 'Cin' },
      { header: 'Nom' },
      { header: 'Prénom' },
      { header: 'Téléphone' },
      { header: 'Adresse' },

    ];

    this.items = [
      {label:'Intervenant'},
  ];

    this.home = {icon: 'pi pi-home'};
  }

  confirm2(id: any) {
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer ? ',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.intervenantService.deleteIntervenant(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listIntervenant.findIndex(el => el['intervenantid'] == id);
              this.listIntervenant.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Intervenant supprimé avec succès' });
            },
            error => console.log(error));


      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
