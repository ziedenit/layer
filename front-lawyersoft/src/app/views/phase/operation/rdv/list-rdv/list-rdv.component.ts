import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Rendezvous } from 'src/app/entitie/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrls: ['./list-rdv.component.css'],
  providers: [MessageService]

})
export class ListRdvComponent implements OnInit {

  activeIndex: number = 1;

  items: MenuItem[];
  cols2: any[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  displayBasicadd: boolean;
  displayBasicupdate: boolean;
  submitted = false;
  affaireId: any;
  phase: Phase;
  phaseId: any;
  idrendezvous: any;


  listRendezvous: Rendezvous[];
  rendezvous: Rendezvous;
  selectedRendezvous: Rendezvous;
  idRendezvous: any;

  isValidFormSubmitted = false;

  constructor(
    private phaseservice: PhaseService,
    public rendezvousService: RendezvousService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {
    this.phaseId = this.route.snapshot.paramMap.get('id');
   }


  rendezvousForm = new FormGroup({
    etat: new FormControl(null, Validators.required),
    daterendezvous: new FormControl(Date.now()),
    description: new FormControl(null, Validators.required),
    phaseId: new FormControl(),
  });


  FindAllRdvByPhase() {
    this.phaseId = this.route.snapshot.paramMap.get('id');
    this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listRDV", resultat);
      this.rendezvousService.listRendezvous = resultat;
    });
  }

  ngOnInit(): void {

    this.phaseId = this.route.snapshot.paramMap.get('id');

    //  console.log("affaireid" + this.affaireId);


    this.FindAllRdvByPhase();


    this.cols2 = [
      { header: "Date" },
      { header: "Description" },
      { header: "Etat" },

    ];

    this.items = [
      { label: 'Phase' },
      { label: 'Opérations' },
    ];

    this.home = { icon: 'pi pi-home' };

  }


  showBasicDialogadd() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicadd = true;

  }

  showBasicDialogupdate(id) {
    console.log("dialog");
    console.log("id", id);

    // tslint:disable-next-line: no-unused-expression
    this.displayBasicupdate = true;
    this.idrendezvous = id;
    console.log("idaudiance", this.idrendezvous)
  }


  showChange2(event) {
    console.log(event);
    console.log(this.rendezvousForm.value);
  }

  confirm4(id: any) {

    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {

        this.rendezvousService.deleteRendezvous(id)
          .subscribe(
            data => {
              /* reload page */
              let index = this.rendezvousService.listRendezvous.findIndex(el => el['rendezvousId'] == id);
              this.rendezvousService.listRendezvous.splice(index, 1);
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
