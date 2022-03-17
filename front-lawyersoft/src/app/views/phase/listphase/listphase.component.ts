import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepsModule } from 'primeng/steps';
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
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-listphase',
  templateUrl: './listphase.component.html',
  styleUrls: ['./listphase.component.css'],

  providers: [MessageService],

})
export class ListphaseComponent implements OnInit {

  constructor(private phaseservice: PhaseService,
    private audianceService: AudianceService,
    private rendezvousService: RendezvousService,
    private tacheService: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) { }



  activeIndex: number = 1;

  items: MenuItem[];
  cols: any[];
  cols1: any[];
  cols2: any[];
  msgs: Message[] = [];
  first: number = 0;
  home: MenuItem;
  displayBasic: boolean;
  displayBasic1: boolean;
  submitted = false;
  affaireId: any;


  listPhase: any;
  phase: Phase;
  selectedPhase: Phase;
  Phaseid: any;

  listAudiance: Audiance[];
  audiance: Audiance;
  selectedAudiance: Audiance;
  idAudiance: any;

  listRendezvous: Rendezvous[];
  rendezvous: Rendezvous;
  selectedRendezvous: Rendezvous;
  idRendezvous: any;

  listTache: Tache[];
  tache: Tache;
  selectedTache: Tache;
  idTache: any;

  statuts = [
    { label: 'Pour entendre les témoins', value: 'Pour entendre les témoins' },
    { label: 'Pour notre réplique', value: 'Pour notre réplique' },
    { label: 'Lecture de jugement', value: 'Lecture de jugement' },

  ];

  etat = [
    { label: 'En cours', value: 'En cours' },
    { label: 'Cloturé', value: 'Cloturé' },
    { label: 'Reporter', value: 'Reporter' },
  ];


  isValidFormSubmitted = false;


  /*phaseForm = new FormGroup({
    phaseId: new FormControl(null, Validators.required),
    titre: new FormControl(null, Validators.required),
    nom: new FormControl(null, Validators.required),
    referencetribunal: new FormControl(null, Validators.required),
    dateDebut: new FormControl(Date.now()),
    dateFin: new FormControl(Date.now()),
    affaireId: new FormControl(null, Validators.required),
    tribunalId: new FormControl(null, Validators.required),

  });*/

  audianceForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    statut: new FormControl(null, Validators.required),
    dateAudiance: new FormControl(Date.now()),
    phaseId: new FormControl(),
  });

  tacheForm = new FormGroup({
    titre: new FormControl(null, Validators.required),
    etat: new FormControl(null, Validators.required),
    dateDebut: new FormControl(null, Validators.required),
  });


  ngOnInit(): void {

    this.affaireId = this.route.snapshot.paramMap.get('id');

    //  console.log("affaireid" + this.affaireId);

    this.phaseservice.findAllAffaire(this.affaireId).subscribe(resultat => {
      console.log("listPhase", resultat);
      this.listPhase = resultat;
    });


  }



}

