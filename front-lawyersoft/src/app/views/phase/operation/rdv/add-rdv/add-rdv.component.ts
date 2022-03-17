import { Component, OnInit, Input } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Rendezvous } from 'src/app/entitie/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.css'],
  providers: [MessageService]

})
export class AddRdvComponent implements OnInit {

  activeIndex: number = 1;

  items: MenuItem[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  // tslint:disable-next-line: no-input-rename
  @Input("displayBasicadd") displayBasicadd: boolean;
  submitted = false;
  affaireId: any;
  phase: Phase;
  @Input("phaseId")
  phaseId: any;

  listRendezvous: Rendezvous[];
  rendezvous: Rendezvous;
  selectedRendezvous: Rendezvous;
  idRendezvous: any;

  statuts = [
    { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
    { label: 'Pour notre réplique', value: 'Pour notre réplique' },
    { label: 'Lecture de jugement', value: 'Lecture de jugement' },

  ];

  etat = [
   /* { label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];

  isValidFormSubmitted = false;

  constructor(
    private phaseservice: PhaseService,
    private rendezvousService: RendezvousService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }


  rendezvousForm = new FormGroup({
    daterendezvous: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    phaseId: new FormControl(),
  });


  ngOnInit(): void {

    console.log("addphaseid",this.phaseId)


    this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
      this.phase = phase;

    });
  }

  showBasicDialogadd() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicadd = true;
  }

  resetRendezForm() {
    this.rendezvousForm.reset();
    this.submitted = false;

  }

  showChange2(event) {
    console.log(event);
    console.log(this.rendezvousForm.value);
  }


  showSuccess3() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Rendez-vous effectué avec succès' });
  }


  FindAllRdvByPhase() {
    this.phaseId = this.route.snapshot.paramMap.get('id');
    this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listRDV", resultat);
      this.rendezvousService.listRendezvous = resultat;
    });
  }


  addrendezvous(): void {
    console.log("valueform");

    this.submitted = true;

    if (this.rendezvousForm.valid) {
      console.log(this.rendezvousForm.value);


      // this.audianceForm.value.audianceId = this.audiance;
      this.rendezvousForm.value.phaseId = this.phase;

      this.rendezvousService.addRendezvous(this.rendezvousForm.value).subscribe(data => {
        this.showSuccess3();
        console.log(data);
        this.displayBasicadd = false;
        this.rendezvousService.listRendezvous.push(data);
        this.FindAllRdvByPhase()
      });
    }
  }

  get f2() {
    return this.rendezvousForm.controls;
  }
}
