import { Consultation } from './../../../../entitie/Consultation';
import { ConsultationService } from './../../../../services/consultation.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-listrendezvous',
  templateUrl: './listrendezvous.component.html',
  styleUrls: ['./listrendezvous.component.css']
})
export class ListrendezvousComponent implements OnInit {

  listConsultation: Consultation[];
  consultation: Consultation;
  cols: any[];
  msgs: Message[] = [];
  selectedConsultation: Consultation;
  first: number = 0;
  items: MenuItem[];
  home: MenuItem;
  idConsultation: any;

  rdvs: any;
  constructor(private consultationService: ConsultationService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit(): void {
    this.consultationService.getListConsultationByType("rdv").subscribe((res: Consultation[]) => {
      this.listConsultation = res;
      console.log('rdvs', res);
    });

    this.cols = [
      { header: 'Type' },
      { header: 'Titre' },
      { header: 'Collaborateur' },
      { header: 'Date Début' },
      { header: 'Intervenant' },
      { header: 'Etat' },

    ];

    this.items = [
      { label: 'Consultation' },
      { label: 'Rendez-vous' },
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

        this.consultationService.deleteConsultation(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.listConsultation.findIndex(el => el['consultationId'] == id);
              this.listConsultation.splice(index, 1);
              this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Rendez-vous supprimé avec succès' });

            },
            error => console.log(error));

      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
