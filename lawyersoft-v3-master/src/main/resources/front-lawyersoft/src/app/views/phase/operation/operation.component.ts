import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
  providers: [MessageService]

})
export class OperationComponent implements OnInit {


  affaireId: any;
  phase: Phase;
  phaseId: any;
  home: MenuItem;
  items: MenuItem[];


  data1: any;



  listAudiance: any;
  audiance: Audiance;
  selectedAudiance: Audiance;
  idAudiance: any;

  listRendezvous: any;
  rendezvous: Rendezvous;
  selectedRendezvous: Rendezvous;
  idRendezvous: any;

  listTache: any;
  tache: Tache;
  selectedTache: Tache;
  idTache: any;

  nbretache = 0;
  nbreaudiance = 0;
  nbreredv = 0;

  constructor(
    private phaseservice: PhaseService,
    private audianceService: AudianceService,
    private rendezvousService: RendezvousService,
    private tacheService: TacheService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }





  ngOnInit(): void {

    this.phaseId = this.route.snapshot.paramMap.get('id');


    this.phaseservice.getPhasebyid(this.phaseId).subscribe(phase => {
      this.phase = phase;

      this.items = [
        { label: this.phase.nom },
        { label: 'Opérations' },
      ];

      this.home = { icon: 'pi pi-home' };

    });



    this.audianceService.findAllPhase(this.phaseId).subscribe(resultat => {
      this.listAudiance = resultat;
      this.nbreaudiance = this.listAudiance.length;


      this.tacheService.findAllPhase(this.phaseId).subscribe(resultat => {
        console.log("listTache", resultat);
        this.listTache = resultat;
        this.nbretache = this.listTache.length;

        this.rendezvousService.findAllPhase(this.phaseId).subscribe(resultat => {
          this.listRendezvous = resultat;
          this.nbreredv = this.listRendezvous.length;



          this.data1 = {
            labels: ['Audiance', 'Travaux à faire', 'Rendez-vous'],
            datasets: [
              {
                data: [this.nbreaudiance, this.nbretache, this.nbreredv],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
        });
      });
    });


  }

}
