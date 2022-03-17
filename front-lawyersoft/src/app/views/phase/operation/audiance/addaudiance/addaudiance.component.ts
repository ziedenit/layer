import { Component, OnInit, Input } from '@angular/core';
import { Phase } from 'src/app/entitie/Phase';
import { PhaseService } from 'src/app/services/phase.service';
import { Audiance } from 'src/app/entitie/Audiance';
import { AudianceService } from 'src/app/services/audiance.service';
import { Rendezvous } from 'src/app/entitie/rendezvous';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { Tache } from 'src/app/entitie/Tache';
import { TacheService } from 'src/app/services/tache.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Message, ConfirmationService, MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatusAudiance } from 'src/app/entitie/Statusaudiance';
import { StatusAudianceService } from 'src/app/services/Statusaudiance.service';


@Component({
  selector: 'app-addaudiance',
  templateUrl: './addaudiance.component.html',
  styleUrls: ['./addaudiance.component.css'],
  providers: [MessageService]

})
export class AddaudianceComponent implements OnInit {

  activeIndex: number = 1;
  submitted = false;
  isValidFormSubmitted = false;


  items: MenuItem[];
  cols: any[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  /*displayBasic: boolean;*/

  statusaudiance: StatusAudiance;
  liststatusaudiance: [];

  @Input("displayBasicadd") displayBasicadd: boolean;

  affaireId: any;
  phase: Phase;
  @Input("phaseId")
  phaseId: any;


  listAudiance: Audiance[];
  audiance: Audiance;
  selectedAudiance: Audiance;
  idAudiance: any;


  /*statuts = [
    { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
    { label: 'Pour notre réplique', value: 'Pour notre réplique' },
    { label: 'Lecture de jugement', value: 'Lecture de jugement' },

  ];*/

  etat = [
  /*  { label: 'En cours', value: 'En cours' },*/
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];


  audianceForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    dateAudiance: new FormControl(null, Validators.required),
    phaseId: new FormControl(null, Validators.required),
    statusId: new FormControl(null, Validators.required),

  });

  constructor(
    private phaseservice: PhaseService,
    private audianceService: AudianceService,
    private statusaudianceService: StatusAudianceService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }
  ngOnInit(): void {


    this.statusaudianceService.getListStatusAudiance().subscribe((resultat: []) => {
      this.liststatusaudiance = resultat;


    });

    console.log("addphaseid", this.phaseId)


    this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
      this.phase = phase;

    });

  }



  /* FindAllAudianceByPhase() {
    //this.phaseId = this.route.snapshot.paramMap.get('id');
    //console.log(this.phaseId)
    this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.listAudiance = resultat;
    });
  } */



  showBasicDialogadd() {
    console.log("dialog");
    // tslint:disable-next-line: no-unused-expression
    this.displayBasicadd = true;

  }

  resetAudianceForm() {
    this.audianceForm.reset();
    this.submitted = false;

  }

  showChange(event) {
    console.log(event);
    console.log(this.audianceForm.value);
  }

  showSuccess1() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Ajout Audiance effectué avec succès' });
  }

  get f() {
    return this.audianceForm.controls;
  }


  FindAllAudianceByPhase() {


    this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
      console.log("listAudiance", resultat);
      this.audianceService.listAudiance = resultat;
    });
  }

  addaudiance(): void {
    console.log("valueform");
    this.submitted = true;
    console.log("this.audianceForm", this.audianceForm.value)
    if (this.audianceForm.valid) {
    console.log(this.audianceForm.value);

    this.audianceForm.value.phaseId = this.phase;

    console.log("avantadd", this.audianceForm.value)

    this.audianceService.addAudiance(this.audianceForm.value).subscribe(data => {
      this.showSuccess1();
      console.log(data);
      this.displayBasicadd = false;
      this.audianceService.listAudiance.push(data);
      this.FindAllAudianceByPhase()

    });

    }else {
       this.submitted = true;
     }
  }

}
